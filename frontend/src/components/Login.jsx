import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function Login ()
{
  const [ showModal, setShowModal ] = useState( false );
  const [ isLogin, setIsLogin ] = useState( true );
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const [ username, setUsername ] = useState( '' );
  const [ confirmPassword, setConfirmPassword ] = useState( '' );
  const [ error, setError ] = useState( [] );

  const handleClose = () => {
    resetState();
  }
  const handleShow = () => setShowModal( true );
  
  const resetState = () => {
    setShowModal(false);
    setIsLogin(true);
    setPassword('');
    setConfirmPassword('');
    setError([]);
  };

  const handleToggleSignup = () =>
  {
    setIsLogin( !isLogin );
  };
  const setErrorMessages = ( errorResponse ) =>
  {
    // Check if errorResponse.message exists and is an array
    if ( errorResponse.message || Array.isArray( errorResponse.message ) ) {
      // Extract the error messages from the response and return them as an array
      // console.log( errorResponse.message.map( ( err ) => err.message ) )
      setError( errorResponse.message.map( ( err ) => err.message ));
    } else {
      // If errorResponse.message doesn't exist or is not an array, return an empty array
      return setError([]);
    }
  };

  const handleSubmit = async ( e ) =>
  {
    e.preventDefault();
    setError( [] ); // Clear any previous errors

    try {
      if ( isLogin ) {
        // Handle login logic
        const response = await axios.post( 'http://localhost:3500/login', {
          email,
          password,
        } );
        if ( response.status === 201 ) {
          console.log( 'Login successful' );
          handleClose();
        } else {
          setError( 'Something went wrong. Please try again later.' );
        }
      } else {
        // Handle signup logic
        const response = await axios.post( 'http://3mealfood.com/users', {
          username,
          email,
          password,
          confirmPassword,
        } );
        if ( response.status === 201 ) {
          console.log( 'Signup successful' );
          handleClose();

        } else {
          setErrorMessages( response.data )
        }
      }
    } catch ( error ) {

      setError( `An unexpected error occurred. Error: ${error}` );
    }
  };

  return (
    <>
      <Button className="book-a-table-btn scrollto d-none d-lg-flex" onClick={ handleShow }>
        登入
      </Button>

      <Modal show={ showModal } onHide={ handleClose } centered dialogClassName="custom-modal-style">
        <Modal.Header closeButton className="justify-content-center" style={ { backgroundColor: 'black', color: 'white', borderBottom: '1px solid #cda45e' } }>
          <Modal.Title>{ isLogin ? '登入' : '註冊' }</Modal.Title>
        </Modal.Header>
        <Modal.Body style={ { backgroundColor: 'black', color: 'white' } }>
          { isLogin ? (
            <Form onSubmit={ handleSubmit }>
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>電子信箱</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={ email }
                  onChange={ ( e ) => setEmail( e.target.value ) }
                  required
                  style={ { borderColor: '#cda45e', backgroundColor: 'black', color: 'white' } }
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label>密碼</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={ password }
                  onChange={ ( e ) => setPassword( e.target.value ) }
                  required
                  style={ { borderColor: '#cda45e', backgroundColor: 'black', color: 'white' } }
                />
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button onClick={ handleSubmit } className="book-a-table-btn login-submit-button" variant="primary" type="submit">
                  登入
                </Button>
              </div>
              <p className="text-center mt-3 mb-0">
                沒有帳號嗎？{ ' ' }
                <Button variant="link" className="p-0" onClick={ handleToggleSignup }>
                  立即註冊
                </Button>
              </p>
            </Form>
          ) : (
            <Form onSubmit={ handleSubmit }>
              <Form.Group controlId="formBasicUsername" className="mb-4">
                <Form.Label>使用者名稱</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={ username }
                  onChange={ ( e ) => setUsername( e.target.value ) }
                  required
                  autoComplete="off"
                  style={ { borderColor: '#cda45e', backgroundColor: 'black', color: 'white' } }
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmailSignup" className="mb-4">
                <Form.Label>電子信箱</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={ email }
                  onChange={ ( e ) => setEmail( e.target.value ) }
                  required
                  autoComplete="off"
                  style={ { borderColor: '#cda45e', backgroundColor: 'black', color: 'white' } }
                />
              </Form.Group>

              <Form.Group controlId="formBasicPasswordSignup" className="mb-4">
                <Form.Label>密碼</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={ password }
                  onChange={ ( e ) => setPassword( e.target.value ) }
                  required
                  autoComplete="off"
                  style={ { borderColor: '#cda45e', backgroundColor: 'black', color: 'white' } }
                />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label>確認密碼</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={ confirmPassword }
                  onChange={ ( e ) => setConfirmPassword( e.target.value ) }
                  required
                  autoComplete="off"
                  style={ { borderColor: '#cda45e', backgroundColor: 'black', color: 'white' } }
                />
              </Form.Group>

              { error && (
                <div className="error-messages">
                  { error.map( ( errorMessage, index ) => (
                    <p key={ index } className="error-message">
                      { errorMessage }
                    </p>
                  ) ) }
                </div>
              ) }

              <div className="d-flex justify-content-center">

                <Button onClick={ handleSubmit } className="book-a-table-btn login-submit-button" variant="primary" type="submit">
                  註冊
                </Button>
              </div>
              <p className="text-center mt-3 mb-0">
                已有帳號？{ ' ' }
                <Button variant="link" className="p-0" onClick={ handleToggleSignup }>
                  登入
                </Button>
              </p>
            </Form>
          ) }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;