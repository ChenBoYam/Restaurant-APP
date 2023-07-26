import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import LoginOrRegister from './LoginOrRegister';
import InputLoginForm from './InputForm';
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
// require('dotenv').config();


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
        const postRoute = `${process.env.REACT_APP_SERVER_ADRESS}/users`
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
  const responseGoogle = (response) => {
    // The user successfully logged in with Google.
    console.log(response);
  };

  const errorGoogle = (error) => {
    // An error occurred during the login process.
    console.error(error);
  };

  const loginGoogle = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: errorGoogle
  })

  const responseFacebook = (response) => {
    console.log(response);
  }

  const loginLine = () => {
    let client_id = process.env.LINE_LOGIN_ID;
    let redirect_uri = 'https://3mealfood.com';
    let link = 'https://access.line.me/oauth2/v2.1/authorize?';
    link += 'response_type=code';
    link += '&client_id=' + client_id;
    link += '&redirect_uri=' + redirect_uri;
    link += '&state=login';
    link += '&scope=openid%20profile';
    window.location.href = link;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Button className="book-a-table-btn scrollto d-none d-lg-flex" onClick={handleShow}>
          登入
        </Button>
        {/* <Button className="book-a-table-btn scrollto d-none d-lg-flex" onClick={handleShow}>
          訂位
        </Button> */}
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
          <hr style={{ borderColor: 'white' }} />

          {/* google login */}
          <button onClick={() => loginGoogle()} className='google-login-btn' >
            <i class="bi bi-google">{" "}</i>使用 Google 帳號登入
          </button>

          {/* facebook login */}
          <FacebookLogin
            appID={process.env.FB_LOGIN_ID}
            textButton=" 使用 Facebook 帳號登入"
            autoLoad={false}
            callback={responseFacebook}
            icon="bi bi-facebook"
            cssClass="facebook-login-btn"
            cookie={false}
            render={renderProps => (
              <button onClick={renderProps.onClick}>This is my custom FB button</button>
            )}
          />

          {/* line login */}
          <button onClick={() => loginLine()} className='line-login-btn' >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-line" viewBox="0 0 16 16">
              <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
            </svg>
            {" "}使用 Line 帳號登入
          </button>


        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
export { checkLogin };