import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';


const Menu = () => {
  const [data, setData] = useState({
    title: '',
    price: '',
    note: '',
    category: '',
    imgName: '',
    imgPath: ''
  });

  const [image, setImage] = useState(null);
  const [aboutInfo, setAboutInfo] = useState([]);  // State to hold existing data
  const [selectedCategory, setSelectedCategory] = useState('');

  const initData = () => {
    setData({
      title: '',
      price: '',
      note: '',
      category: '',
      imgName: '',
      imgPath: ''
    });
    setImage(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Fetch existing data when component mounts
  const fetchAboutInfo = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/menu`);
      setAboutInfo(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchAboutInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('data', JSON.stringify(data));

    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/menu`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status >= 200 && response.status < 300) {
        console.log('Data uploaded successfully!');
        fetchAboutInfo();
        initData();
      } else {
        console.error('Error uploading data:', await response.text());
      }
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  }


  const handleDelete = async (id, imgPath) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/menu/${id}`);
      if (response.status >= 200 && response.status < 300) {
        console.log('Data deleted successfully!');
        // Remove the deleted entry from the state
        setAboutInfo(prevAboutInfo => prevAboutInfo.filter(info => info._id !== id));
      } else {
        console.error('Error deleting data:', await response.text());
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }




  return (
    <Container className="home-container">
      <h1 className="home-title">暖食菜單</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>菜名:</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="title" value={data.title} onChange={handleChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>價格:</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="price" value={data.price} onChange={handleChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>備注:</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="note" value={data.note} onChange={handleChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>類別:</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="category" value={data.category} onChange={handleChange} />
          </Col>
        </Form.Group>


        <Form.Group as={Row}>
          <Form.Label column sm={2}>照片名:</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="imgName" value={data.imgName} onChange={handleChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>上傳照片:</Form.Label>
          <Col sm={10}>
            <Form.Control type="file" name="imgName" onChange={handleImageChange} />
          </Col>
        </Form.Group>

        <Button type="submit">提交</Button>
      </Form>

      <Row className="mt-4">

        <div className="category-buttons">
          <Button onClick={() => handleCategoryClick('定食')} style={{ marginRight: "10px" }}>定食</Button>
          <Button onClick={() => handleCategoryClick('單點')}>單點</Button>
        </div>

        {aboutInfo
          .filter(info => !selectedCategory || info.category === selectedCategory)
          .map((info) => (
            <Col xs={12} md={4} className="info-card mb-4" key={info._id}>
              <div className="info-container">
                <div className="info-header">
                  <h3 className="info-title">菜名: {info.title}</h3>
                  <h5 className="info-subtitle">價格: {info.price}</h5>
                  <h5 className="info-subtitle">備注: {info.note}</h5>
                  <h5 className="info-subtitle">類別: {info.category}</h5>
                </div>
                <div className="info-footer">
                  <h5>照片:</h5>
                  <img src={process.env.REACT_APP_SERVER_ADDRESS + "/" + info.imgPath} alt={info.imgName} className="info-img" style={{ width: "100%" }} />
                </div>
                <Button className="info-delete-button mt-2" onClick={() => handleDelete(info._id, info.imgPath)}>
                  刪除
                </Button>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Menu;
