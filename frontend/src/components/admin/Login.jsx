import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        if (username === process.env.REACT_APP_ADMIN_ACCOUNT && password === process.env.REACT_APP_ADMIN_PASSWORD) {
            onLogin(); // Call the onLogin prop to update authentication state in the parent component
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div style={{ width: '300px', margin: 'auto', marginTop: '100px' }}>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label>帳號</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button className="mt-2" variant="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;
