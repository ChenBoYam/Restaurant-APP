import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const About = () => {
  const [data, setData] = useState({
    title: '',
    subTitle: '',
    bulletPoints: ['', '', ''],
    intro: '',
    imgName: '',
    imgPath: ''
  });

  const [image, setImage] = useState(null);
  const [aboutInfo, setAboutInfo] = useState([]);  // State to hold existing data
  const [editingEntry, setEditingEntry] = useState(null);
  const uploadPath = "http://localhost:3500/"

  // Fetch existing data when component mounts
  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const response = await axios.get('http://localhost:3500/admin/about');
        setAboutInfo(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
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
      const response = await axios.post('http://localhost:3500/admin/about', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status >= 200 && response.status < 300) {
        console.log('Data uploaded successfully!');
        window.location.reload();
      } else {
        console.error('Error uploading data:', await response.text());
      }
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('data', JSON.stringify(editingEntry));

    try {
      const response = await axios.patch(`http://localhost:3500/admin/about/${editingEntry._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status >= 200 && response.status < 300) {
        console.log('Data updated successfully!');
        window.location.reload();
      } else {
        console.error('Error updating data:', await response.text());
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };


  return (
    <Container className="home-container">
      <h1 className="home-title">About</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Title:</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="title" value={data.title} onChange={handleChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>Sub Title:</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="subTitle" value={data.subTitle} onChange={handleChange} />
          </Col>
        </Form.Group>

        {data.bulletPoints.map((point, index) => (
          <Form.Group as={Row} key={index}>
            <Form.Label column sm={2}>Bullet Point {index + 1}:</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name={`bulletPoints[${index}]`}
                value={point}
                onChange={(e) => {
                  const newBulletPoints = [...data.bulletPoints];
                  newBulletPoints[index] = e.target.value;
                  setData(prevData => ({
                    ...prevData,
                    bulletPoints: newBulletPoints
                  }));
                }}
              />
            </Col>
          </Form.Group>
        ))}
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Intro:</Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" name="intro" value={data.intro} onChange={handleChange} />
          </Col>
        </Form.Group>


        <Form.Group as={Row}>
          <Form.Label column sm={2}>img name:</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="imgName" value={data.imgName} onChange={handleChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Upload Image:</Form.Label>
          <Col sm={10}>
            <Form.Control type="file" name="imgName" onChange={handleImageChange} />
          </Col>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>

      <Row className="mt-4">
        {aboutInfo.map((info) => (
          <Col xs={12} md={4} className="info-card mb-4" key={info._id}>
            <div className="info-container">
              <div className="info-header">
                <h3 className="info-title">Title: {info.title}</h3>
                <h5 className="info-subtitle">Sub Title: {info.subTitle}</h5>
              </div>
              <div className="info-body">
                <h6>Bullet Points:</h6>
                <ul className="info-bullet-points" style={{listStyleType: "none"}}>
                  {info.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <h6>Introduction:</h6>
                <p className="info-intro">{info.intro}</p>
              </div>
              <div className="info-footer">
                <h6>Image:</h6>
                <img src={uploadPath + info.imgPath} alt={info.imgName} className="info-img" style={{ width: "100%" }} />
              </div>
              <Button className="info-update-button mt-2" onClick={() => setEditingEntry(info)}>
                Update
              </Button>
            </div>
          </Col>
        ))}
      </Row>


      {editingEntry && (
        <Form onSubmit={handleUpdate}>
          <h3>Update Entry</h3>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>Title:</Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="title" value={editingEntry.title} onChange={(e) => setEditingEntry({ ...editingEntry, title: e.target.value })} />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>Sub Title:</Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="subTitle" value={editingEntry.subTitle} onChange={(e) => setEditingEntry({ ...editingEntry, subTitle: e.target.value })} />
            </Col>
          </Form.Group>

          {editingEntry.bulletPoints.map((point, index) => (
            <Form.Group as={Row} key={index}>
              <Form.Label column sm={2}>Bullet Point {index + 1}:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name={`bulletPoints[${index}]`}
                  value={point}
                  onChange={(e) => {
                    const newBulletPoints = [...editingEntry.bulletPoints];
                    newBulletPoints[index] = e.target.value;
                    setEditingEntry({ ...editingEntry, bulletPoints: newBulletPoints });
                  }}
                />
              </Col>
            </Form.Group>
          ))}

          <Form.Group as={Row}>
            <Form.Label column sm={2}>Intro:</Form.Label>
            <Col sm={10}>
              <Form.Control as="textarea" name="intro" value={editingEntry.intro} onChange={(e) => setEditingEntry({ ...editingEntry, intro: e.target.value })} />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>img name:</Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="imgName" value={editingEntry.imgName} onChange={(e) => setEditingEntry({ ...editingEntry, imgName: e.target.value })} />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>Upload New Image:</Form.Label>
            <Col sm={10}>
              <Form.Control type="file" name="imgName" onChange={handleImageChange} />
            </Col>
          </Form.Group>

          <Button className="mt-2" type="submit">Update</Button>
        </Form>
      )}


    </Container>
  );
};

export default About;
