import React, { useState, useEffect } from "react";
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import AOS from 'aos';
import DishList from "./DishList";
import axios from 'axios';
import 'aos/dist/aos.css';


function Menu() {
  const [data, setData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('定食');


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    const fetchMenuInfo = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/menu`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMenuInfo();
  }, []);

  

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <section id="menu" className="menu section-bg">
        <Container data-aos="fade-up">
          <div className="section-title">
            <h2>暖食菜單</h2>
            <p>暖食菜單</p>
          </div>

          <Row data-aos="fade-up" data-aos-delay="100">
            <Col lg={12} className="d-flex justify-content-center">
              <ButtonGroup id="menu-flters">
                <Button className={`btn-custom ${activeFilter === '定食' ? "active" : ""}`} onClick={() => handleFilterClick('定食')}>定食</Button>
                <Button className={`btn-custom ${activeFilter === '單點' ? "active" : ""}`} onClick={() => handleFilterClick('單點')}>單點</Button>
                <Button className={`btn-custom ${activeFilter === '合菜' ? "active" : ""}`} onClick={() => handleFilterClick('合菜')}>合菜</Button>
                <Button className={`btn-custom ${activeFilter === '甜點飲料' ? "active" : ""}`} onClick={() => handleFilterClick('甜點飲料')}>甜點飲料</Button>
              </ButtonGroup>
            </Col>
          </Row>

          <DishList activeFilter={activeFilter} data={data}/>
        </Container>
      </section>
    </div>
  );
};

export default Menu;