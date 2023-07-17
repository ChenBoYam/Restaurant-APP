import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from './TimePicker';
import CustomDatePicker from "./CustomDatePicker"

function ReservationForm() {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(null);
    const [adults, setAdults] = useState('');
    const [children, setChildren] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the reservation submission here (e.g., send data to the server)
        console.log('Reservation submitted:', { adults, children, date });
        // Reset form fields
        setAdults('');
        setChildren('');
        setDate(null);
        handleClose();
    };

    const handleAdultChange = (e) => {
        setAdults(e.target.value);
    };

    const handleChildrenChange = (e) => {
        setChildren(e.target.value);
    };

    return (
        <>
            <Button className="book-a-table-btn scrollto d-none d-lg-flex" onClick={handleShow}>
                訂位
            </Button>

            <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal-style">
                <Modal.Header closeButton className="justify-content-center" style={{ backgroundColor: 'black', color: 'white', borderBottom: '1px solid #cda45e' }}>
                    <Modal.Title>訂位</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'black', color: 'white' }}>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="adult-picker" className="mb-4">
                                    <Form.Label>大人</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={adults}
                                        onChange={handleAdultChange}
                                        required
                                        style={{ borderColor: '#cda45e', backgroundColor: 'black', color: 'white' }}
                                    >
                                        <option disabled>選擇人數</option>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                                            <option key={num} value={num}>
                                                {num} {num === 1 ? '位大人' : '位大人'}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="children-picker" className="mb-4">
                                    <Form.Label>小孩</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={children}
                                        onChange={handleChildrenChange}
                                        required
                                        style={{ borderColor: '#cda45e', backgroundColor: 'black', color: 'white' }}
                                    >
                                        <option value="0">0 位小孩</option>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                                            <option key={num} value={num}>
                                                {num} {num === 1 ? '位小孩' : '位小孩'}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <CustomDatePicker />
                            </Col>
                        </Row>

                        {/* <CustomDatePicker /> */}
                        <TimePicker />

                        <div className="d-flex justify-content-center">
                            <Button className="book-a-table-btn login-submit-button mt-4" variant="primary" type="submit">
                                確認訂位
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ReservationForm;
