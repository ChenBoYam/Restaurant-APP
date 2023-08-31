import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';


const About = () => {
  const [data, setData] = useState([]);
  const uploadPath = "http://localhost:3500/"


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    const fetchAboutInfo = async () => {
      try {
        const response = await axios.get('http://localhost:3500/admin/about');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchAboutInfo();
  }, []);

  return (
    <div>
      <section id="about" className="about">
        <Container data-aos="fade-up">
          {data.map((info) => (
            <Row>
              <Col lg={{ span: 6, order: 2 }} data-aos="zoom-in" data-aos-delay="100">
                <div className="about-img">
                  <img src={uploadPath + info.imgPath} alt={info.imgName} />
                </div>
              </Col>
              <Col lg={{ span: 6, order: 1 }} className="pt-4 pt-lg-0 content" data-aos="fade-up" data-aos-delay="200">
                <h2>{info.title}</h2>
                <h3 className="fst-italic mb-4">
                  {info.subTitle}
                </h3>
                <ul>
                  {info.bulletPoints.map((point) => (
                    <li style={{fontSize: "18px"}}><i className="bi bi-check-circle"></i>{point}</li>
                  ))}
                </ul>
                <p style={{fontSize: "20px"}}>
                  {info.intro}
                </p>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    </div>
  );
};

export default About;
