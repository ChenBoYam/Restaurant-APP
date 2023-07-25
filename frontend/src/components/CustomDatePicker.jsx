import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';

const CustomDatePicker = ({handleDate}) => {
    const [date, setDate] = useState(new Date());

    // set date state and call handleDate function to send data to the parent component
    const handleChange = (date) => {
        setDate(date);
        handleDate(date);
    };

    return (
        <Form.Group controlId="date" className="mb-4">
            <Form.Label>日期</Form.Label><br />
            <DatePicker
                selected={date}
                onChange={handleChange}
                minDate={new Date()}
                placeholderText="Select date"
                required
                className={`form-control datePicker`}
                style={{ width: '100%' }}
            />
            
        </Form.Group>
    );
}

export default CustomDatePicker;
