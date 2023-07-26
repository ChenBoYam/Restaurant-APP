import React from 'react';
import { Col, Image, Badge } from 'react-bootstrap';

const Dish = ({ dish }) => {
  return (
    <Col md={4} xs={6}>
      <div className="dish">
        <div className="dish_image">
          <Image src={dish.image} alt={`${dish.title}${dish.price}`} />
        </div>
        <div className="dish_info">
          {dish.note && <div className="jp_name"><Badge variant="success">※新品上市</Badge></div>}
          <div className="tw_name">
            {dish.title}
            {dish.price && <span className="price">{dish.price}</span>}
          </div>
        </div>
      </div>
    </Col>
  );
}

export default Dish;
