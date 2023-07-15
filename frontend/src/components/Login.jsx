import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your login logic here
    console.log(email, password);
    handleClose();
  }

  return (
    <>
      <Button className="book-a-table-btn scrollto d-none d-lg-flex" onClick={handleShow}>
        登入
      </Button>

      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal-style">
  <Modal.Header closeButton className="justify-content-center" style={{backgroundColor: 'black', color: 'white', borderBottom: '1px solid #cda45e'}}>
    <Modal.Title>登入</Modal.Title>
  </Modal.Header>
  <Modal.Body style={{backgroundColor: 'black', color: 'white'}}>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail" className="mb-4">
        <Form.Label>電子信箱</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{borderColor: '#cda45e', backgroundColor: 'black', color: 'white'}} 
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="mb-4">
        <Form.Label>密碼</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{borderColor: '#cda45e', backgroundColor: 'black', color: 'white'}} 
        />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button className="book-a-table-btn login-submit-button" variant="primary" type="submit">
          登入
        </Button>
      </div>
    </Form>
  </Modal.Body>
</Modal>

    </>
  );
}

export default Login;
