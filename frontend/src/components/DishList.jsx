import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Dish from './Dish';

const DishList = ({ dishes }) => {
  return (
    <Container className="share_Container dinshi container">
      <div className="h3_border">
        <h3 id="takeout" className="section_divider">外帶 • 外送</h3>
        <Row>
          {dishes.map((dish, index) => <Dish key={index} dish={dish} />)}
        </Row>
      </div>
    </Container>
  );
}

export default DishList;
