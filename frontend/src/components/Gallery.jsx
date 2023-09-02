import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';

function Gallery() {
    const [images, setImages] = useState([]);
    const uploadPath = "http://localhost:3500/"
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
        const fetchImages = async () => {
            try {
                // const response = await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/gallery`);
                const response = await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/gallery`);
                setImages(response.data);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };
        fetchImages();
    }, []);
    return (
        <div>
            <section id="gallery" className="gallery">
                <Container data-aos="fade-up">
                    <div className="section-title">
                        <h2>精選照片</h2>
                        <p>精選照片</p>
                    </div>
                </Container>

                <Container fluid data-aos="fade-up" data-aos-delay="100">
                    <Row className="g-0">
                        {images.map((image) => (
                            <Col lg={3} md={4} key={image._id}>
                                <div className="gallery-item">
                                    <a href={image.path} className="gallery-lightbox" data-gall="gallery-item">
                                        <img src={process.env.REACT_APP_SERVER_ADDRESS + "/" + image.path} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Gallery;