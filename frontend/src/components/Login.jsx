import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import LoginOrRegister from './LoginOrRegister';
import InputLoginForm from './InputForm';

var checkLogin = true;

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState([]);

  const handleClose = () => {
    resetState();
  }
  const handleShow = () => setShowModal(true);

  const resetState = () => {
    setShowModal(false);
    setIsLogin(true);
    setPassword('');
    setConfirmPassword('');
    setError([]);
  };

  const handleToggleSignup = () => {
    setIsLogin(!isLogin);
  };
  const setErrorMessages = (errorResponse) => {
    // Check if errorResponse.message exists and is an array
    if (errorResponse.message || Array.isArray(errorResponse.message)) {
      // Extract the error messages from the response and return them as an array
      // console.log( errorResponse.message.map( ( err ) => err.message ) )
      setError(errorResponse.message.map((err) => err.message));
    } else {
      // If errorResponse.message doesn't exist or is not an array, return an empty array
      return setError([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]); // Clear any previous errors

    try {
      if (isLogin) {
        // Handle login logic
        const response = await axios.post('http://localhost:3500/login', {
          email,
          password,
        });
        if (response.status === 201) {
          console.log('Login successful');
          handleClose();
        } else {
          setError('Something went wrong. Please try again later.');
        }
      } else {
        // Handle signup logic
        const postRoute = `${process.env.SERVER_ADDRESS}/users`
        const response = await axios.post(postRoute, {
          username,
          email,
          password,
          confirmPassword,
        });
        if (response.status === 201) {
          console.log('Signup successful');
          handleClose();

        } else {
          setErrorMessages(response.data)
        }
      }
    } catch (error) {

      setError(`An unexpected error occurred. Error: ${error}`);
    }
  };
  checkLogin = isLogin;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Button className="book-a-table-btn scrollto d-none d-lg-flex" onClick={handleShow}>
          登入
        </Button>
        <Button className="book-a-table-btn scrollto d-none d-lg-flex" onClick={handleShow}>
          訂位
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose} centered dialogClassName="custom-modal-style">
        <Modal.Header closeButton className="justify-content-center" style={{ backgroundColor: 'black', color: 'white', borderBottom: '1px solid #cda45e' }}>
          <Modal.Title>{isLogin ? '登入' : '註冊'}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'black', color: 'white' }}>
          <Form onSubmit={handleSubmit}>
            {!isLogin && <InputLoginForm
              label="使用者名稱"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
            }

            <InputLoginForm
              label="電子信箱"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <InputLoginForm
              label="密碼"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />

            {!isLogin &&
              <InputLoginForm
                label="確認密碼"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
            }

            {!isLogin &&
              Array.isArray(error) && (
                <div className="error-messages">
                  {error.map((errorMessage, index) => (
                    <p key={index} className="error-message">
                      {errorMessage}
                    </p>
                  ))}
                </div>
              )
            }

            {isLogin ?
              (<LoginOrRegister buttonName="登入" text="沒有註冊嗎？" anotherButton="立即註冊" handleSubmit={handleSubmit} handleToggleSignup={handleToggleSignup} />) :
              (<LoginOrRegister buttonName="註冊" text="已有帳號？" anotherButton="登入" handleSubmit={handleSubmit} handleToggleSignup={handleToggleSignup} />)}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
export { checkLogin };