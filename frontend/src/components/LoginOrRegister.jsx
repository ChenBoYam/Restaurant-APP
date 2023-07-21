import React from "react";
import { Button } from 'react-bootstrap';

function LoginOrRegister(props) {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <Button onClick={props.handleSubmit} className="book-a-table-btn login-submit-button" variant="primary" type="submit">
                    {props.buttonName}
                </Button>
            </div>
            <p className="text-center mt-3 mb-0">
                {props.text}
                <Button variant="link" className="p-0" onClick={props.handleToggleSignup}>
                    {props.anotherButton}
                </Button>
            </p>
        </div>
    )
}

export default LoginOrRegister;