import React from 'react';
import { Col, Image, Badge } from 'react-bootstrap';

const Dish = ({ dish }) => {
  const uploadPath = "http://localhost:3500/"

  return (
    <Col md={4} xs={6}>
      <div className="dish">
        <div className="dish_image" style={{ textAlign: 'center' }}>
          <Image
            src={process.env.REACT_APP_SERVER_ADDRESS + "/" + dish.imgPath}
            alt={`${dish.title}${dish.price}`}
            style={{ width: '80%', margin: '0 auto' }}
            className='mt-4'
          />
        </div>
        <div className="dish_info">
          {dish.note && <div className="jp_name"><Badge variant="success">※新品上市</Badge></div>}
          <div className="tw_name mt-4">
            {dish.title}
            {dish.price && <span className="price">{dish.price}</span>}
          </div>
        </div>
      </div>
    </Col>
    
  );
}

export default Dish;
