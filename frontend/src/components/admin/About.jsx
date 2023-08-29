import React, { useState } from 'react';
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
      const response = await axios.post('/path_to_your_api_endpoint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  }

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
    </Container>
  );
};

export default About;
