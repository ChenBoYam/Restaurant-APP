import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from "../img/about.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div>
      <section id="about" className="about">
        <Container data-aos="fade-up">
          <Row>
            <Col lg={{ span: 6, order: 2 }} data-aos="zoom-in" data-aos-delay="100">
              <div className="about-img">
                <img src={aboutImg} alt="aboutImg" />
              </div>
            </Col>
            <Col lg={{ span: 6, order: 1 }} className="pt-4 pt-lg-0 content" data-aos="fade-up" data-aos-delay="200">
              <h3>三餐暖食</h3>
              <p className="fst-italic">
                暖口、暖胃、暖心
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> 舒適的環境</li>
                <li><i className="bi bi-check-circle"></i> 美味的餐點</li>
                <li><i className="bi bi-check-circle"></i> 溫暖的人心</li>
              </ul>
              <p>
                我們一同許下諾言，帶領所有大朋友、小朋友，品嚐台灣人心中魂牽夢縈的滋味，再度重溫家的味道那份感動。
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;

// import React from "react";


// function About() {
//     return (
//         <div>
//             <section id="about" class="about">
//                 <div class="container" data-aos="fade-up">

//                     <div class="row">
//                         <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
//                             <div class="about-img">
//                                 <img src="assets/img/about.jpg" alt="">
//                             </div>
//                         </div>
//                         <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
//                             <h3>標題</h3>
//                             <p class="fst-italic">
//                                 小標題
//                             </p>
//                             <ul>
//                                 <li><i class="bi bi-check-circle"></i> 列點一</li>
//                                 <li><i class="bi bi-check-circle"></i> 列點二</li>
//                                 <li><i class="bi bi-check-circle"></i> 列點三</li>
//                             </ul>
//                             <p>
//                                 介紹
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//         </div>
//     );
// };

// export default About;