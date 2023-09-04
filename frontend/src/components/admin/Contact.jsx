import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
// import './Contact.css';  // Consider adding a CSS file for styling

const Contact = () => {
  const [contact, setContact] = useState({
    address: "",
    email: "",
    phone: "",
    time: "",
  });

  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phone: "",
    time: "",
  });

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchContact();
  }, []);

  const { address, email, phone, time } = contact;  // Destructure for cleaner JSX

  const fetchContact = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/contact`);
      setContact(response.data[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contact:", error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/contact`, formData);
      setFormData({
        address: "",
        email: "",
        phone: "",
        time: "",
      });
      fetchContact();  // Re-use the fetch function
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  }

  if (loading) return <Alert variant="info">Loading...</Alert>;

  return (
    <Container className='home-container'>
      <h1 className='home-title'>聯絡我們</h1>

      <div className="contact-details mb-4">
        <Row>
          <Col><strong>地址:</strong> {address || 'N/A'}</Col>
          <Col><strong>信箱:</strong> {email || 'N/A'}</Col>
          <Col><strong>電話:</strong> {phone || 'N/A'}</Col>
          <Col><strong>營業時間:</strong> {time || 'N/A'}</Col>
        </Row>
      </div>

      <h2 className="mb-3">更新聯絡我們</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>地址:</Form.Label>
          <Form.Control type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>信箱:</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>電話:</Form.Label>
          <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>營業時間:</Form.Label>
          <Form.Control type="text" name="time" value={formData.time} onChange={handleInputChange} />
        </Form.Group>

        <Button className="mt-4" type="submit">更新</Button>
      </Form>
    </Container>
  );
};

export default Contact;
