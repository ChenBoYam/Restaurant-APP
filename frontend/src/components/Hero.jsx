import React, { useEffect } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from "../img/菜.jpg"

function Hero() {
    const handleNavClick = (e, target) => {
        e.preventDefault();
        const offset = 100; // Height of the fixed header
        const element = document.querySelector(target);
        const topPosition = element.offsetTop - offset;

        window.scrollTo({
            top: topPosition,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, []);

    return (
        <div style={{
            backgroundImage: `url(${bg})`, // Use template literal to include the image path
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "100%",
            height: "100vh",
            position: "relative",
            padding: 0,
        }}>
            <section id="hero" className="d-flex align-items-center">
                <Container className="position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                    <Row>
                        <Col lg={8}>
                            <h1>歡迎光臨 <span>三餐暖食</span></h1>
                            <h2>暖口 暖心 暖胃</h2>

                            <div className="btns">
                                <Button href="#menu" className="btn-menu animated fadeInUp" onClick={(e) => handleNavClick(e, '#menu')}>菜單</Button>
                                {/* <Button href="#book-a-table" className="btn-book animated fadeInUp scrollto">訂位</Button> */}
                            </div>
                        </Col>
                        {/* <Col lg={4} className="d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                            <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="glightbox play-btn"></a>
                        </Col> */}

                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Hero;