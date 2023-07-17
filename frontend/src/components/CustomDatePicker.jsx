import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import styles from './DatePicker.module.css'; // Import your styles
import { Form } from 'react-bootstrap';

const CustomDatePicker = () => {
    const [date, setDate] = useState(new Date());

    return (
        <Form.Group controlId="date" className="mb-4">
            <Form.Label>日期</Form.Label><br />
            <DatePicker
                selected={date}
                onChange={setDate}
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
