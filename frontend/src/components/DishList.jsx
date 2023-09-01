import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Dish from './Dish';

const DishList = ({ activeFilter, data }) => {
  const filteredDishes = data.filter(dish => dish.category === activeFilter);

  return (
    <Container className="share_Container dinshi container">
      <div className="h3_border">
        <h3 id="takeout" className="section_divider">{activeFilter}</h3>
        <Row>
          {filteredDishes.map((dish) => (
            <Dish dish={dish} />
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default DishList;
