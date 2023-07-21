import React from "react";
import { Form } from 'react-bootstrap';

function InputLoginForm(props) {
    return (
        <div>
            <Form.Group controlId="formBasicUsername" className="mb-4">
                <Form.Label>{props.label}</Form.Label>
                <Form.Control
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    required
                    autoComplete="off"
                    style={{ borderColor: '#cda45e', backgroundColor: 'black', color: 'white' }}
                />
            </Form.Group>
        </div>
    )
};

export default InputLoginForm;