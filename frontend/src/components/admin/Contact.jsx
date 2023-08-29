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
      const response = await axios.get('http://localhost:3500/admin/contact');
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
      await axios.post('http://localhost:3500/admin/contact', formData);
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
      <h1 className='home-title'>Contact</h1>

      <div className="contact-details mb-4">
        <Row>
          <Col><strong>Address:</strong> {address || 'N/A'}</Col>
          <Col><strong>Email:</strong> {email || 'N/A'}</Col>
          <Col><strong>Phone:</strong> {phone || 'N/A'}</Col>
          <Col><strong>Time:</strong> {time || 'N/A'}</Col>
        </Row>
      </div>

      <h2 className="mb-3">Add New Contact</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Address:</Form.Label>
          <Form.Control type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone:</Form.Label>
          <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Time:</Form.Label>
          <Form.Control type="text" name="time" value={formData.time} onChange={handleInputChange} />
        </Form.Group>

        <Button className="mt-4" type="submit">Add Contact</Button>
      </Form>
    </Container>
  );
};

export default Contact;
