import React, { useState, useCallback } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from './TimePicker';
import CustomDatePicker from "./CustomDatePicker"
import Login, { checkLogin } from './Login';

function useReservationForm() {
    const [show, setShow] = useState(false);

    const handleCloseWindow = useCallback(() => {
        setShow(false);
    }, []);

    const handleShowWindow = useCallback(() => {
        setShow(true);
    }, []);

    return { show, handleShowWindow, handleCloseWindow };
}

function ReservationForm() {
    const [date, setDate] = useState(new Date());
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [confirmation, setConfirmation] = useState(false);
    const [time, setTime] = useState(null);

    const { show, handleShowWindow, handleCloseWindow } = useReservationForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the reservation submission here (e.g., send data to the server)
        console.log('Reservation submitted:', { adults, children, date });
        // Reset form fields
        // setAdults(1);
        // setChildren(0);
        // setDate(null);
        handleCloseWindow();
        handleConfirmationShow();
    };

    const handleAdultChange = (e) => {
        setAdults(e.target.value);
    };

    const handleChildrenChange = (e) => {
        setChildren(e.target.value);
    };

    const handleConfirmationClose = useCallback(() => {
        setConfirmation(false);
    }, []);

    const handleConfirmationShow = useCallback(() => {
        setConfirmation(true);
    }, []);

    const handleDate = useCallback((date) => {
        setDate(date);
    }, []);

    const handleTime = useCallback((time) => {
        setTime(time);
    }, []);


    return (
        <div>
            <Button className="book-a-table-btn scrollto d-none d-lg-flex" onClick={handleShowWindow}>
                訂位
            </Button>


            {checkLogin ? (<Modal show={show} onHide={handleCloseWindow} centered dialogClassName="custom-modal-style wide-modal">
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
                                <CustomDatePicker handleDate={handleDate}/>
                            </Col>
                        </Row>

                        <TimePicker handleTime={handleTime}/>

                        <div className="d-flex justify-content-center">
                            <Button className="book-a-table-btn login-submit-button mt-4" variant="primary" type="submit">
                                訂位
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>) :
                (<Modal show={show} onHide={handleCloseWindow} centered dialogClassName="custom-modal-style">
                    <Modal.Header closeButton className="justify-content-center" style={{ backgroundColor: 'black', color: 'white', borderBottom: '1px solid #cda45e' }}>
                        <Modal.Title>還沒登入嗎？</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Login />
                    </Modal.Body>
                </Modal>)}

            <Modal show={confirmation} onHide={handleConfirmationClose} centered dialogClassName="custom-modal-style" className="confirm-modal">
                <Modal.Header closeButton className="justify-content-center confirm-header" style={{ backgroundColor: 'black', color: 'white'}}>
                    <Modal.Title> <p>您已選擇預定 三餐暖食： {adults}大 {children}小 {date.getFullYear() + "年" + date.getMonth() + "月" + date.getDate() + "日"} {time}</p></Modal.Title>
                </Modal.Header>
            </Modal>
        </div>
    );
}

export default ReservationForm;
export { useReservationForm };
