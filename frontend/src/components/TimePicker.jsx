import React, { useState } from 'react';
import { Button, ButtonGroup, Container, Row, Col, Form } from 'react-bootstrap';

function TimePicker({handleTime}) {
    const [selectedTime, setSelectedTime] = useState(null);
    const times = ['11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];

    const handleTimeClick = (time) => {
        setSelectedTime(time);
        handleTime(time);
        // console.log(`Selected time: ${time}`);
    };

    return (
        <Container>
            <Row >
                <Col md="auto">
                    <Form.Label>中午</Form.Label><br />
                    <ButtonGroup horizontal>
                        {times.slice(0, 6).map((time, index) => (
                            <Button
                                key={time}
                                onClick={() => handleTimeClick(time)}
                                variant='reservation-custom'
                                className={`time-picker-btn ${time === selectedTime ? "btn-custom-active" : "btn-custom-active-hover"}`}
                            >
                                {time}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="auto">
                    <Form.Label>下午茶</Form.Label><br />
                    <ButtonGroup horizontal>
                        {times.slice(6, 11).map((time, index) => (
                            <Button
                                key={time}
                                onClick={() => handleTimeClick(time)}
                                variant='reservation-custom'
                                className={`time-picker-btn ${time === selectedTime ? "btn-custom-active" : "btn-custom-active-hover"}`}
                            >
                                {time}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="auto">
                    <Form.Label>晚上</Form.Label><br />
                    <ButtonGroup horizontal>
                        {times.slice(11).map((time, index) => (
                            <Button
                                key={time}
                                onClick={() => handleTimeClick(time)}
                                variant='reservation-custom'
                                className={`time-picker-btn ${time === selectedTime ? "btn-custom-active" : "btn-custom-active-hover"}`}
                            >
                                {time}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default TimePicker;
