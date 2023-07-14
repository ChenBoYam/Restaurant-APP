import React, { useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';



import galleryOne from "../img/gallery/gallery-1.jpg";
import galleryTwo from "../img/gallery/gallery-2.jpg";
import galleryThree from "../img/gallery/gallery-3.jpg";
import galleryFour from "../img/gallery/gallery-4.jpg";


function Gallery() {
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
            <section id="gallery" className="gallery">
                <Container data-aos="fade-up">
                    <div className="section-title">
                        <h2>精選照片</h2>
                        <p>精選照片</p>
                    </div>
                </Container>

                <Container fluid data-aos="fade-up" data-aos-delay="100">
                    <Row className="g-0">
                        <Col lg={3} md={4}>
                            <div className="gallery-item">
                                <a href={galleryOne} className="gallery-lightbox" data-gall="gallery-item">
                                    <img src={galleryOne} alt="" className="img-fluid" />
                                </a>
                            </div>
                        </Col>
                        

                        <Col lg={3} md={4}>
                            <div className="gallery-item">
                                <a href={galleryTwo} className="gallery-lightbox" data-gall="gallery-item">
                                    <img src={galleryTwo} alt="" className="img-fluid" />
                                </a>
                            </div>
                        </Col>

                        <Col lg={3} md={4}>
                            <div className="gallery-item">
                                <a href={galleryThree} className="gallery-lightbox" data-gall="gallery-item">
                                    <img src={galleryThree} alt="" className="img-fluid" />
                                </a>
                            </div>
                        </Col>

                        <Col lg={3} md={4}>
                            <div className="gallery-item">
                                <a href={galleryFour} className="gallery-lightbox" data-gall="gallery-item">
                                    <img src={galleryFour} alt="" className="img-fluid" />
                                </a>
                            </div>
                        </Col>

                        <Col lg={3} md={4}>
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    {/* <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" /> */}
                                </a>
                            </div>
                        </Col>

                        <Col lg={3} md={4}>
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-6.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    {/* <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" /> */}
                                </a>
                            </div>
                        </Col>

                        <Col lg={3} md={4}>
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-7.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    {/* <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" /> */}
                                </a>
                            </div>
                        </Col>

                        <Col lg={3} md={4}>
                            <div className="gallery-item">
                                <a href="assets/img/gallery/gallery-8.jpg" className="gallery-lightbox" data-gall="gallery-item">
                                    {/* <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" /> */}
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
    // return (
    //     <div>
    //         <section id="gallery" class="gallery">

    //             <div class="container" data-aos="fade-up">
    //                 <div class="section-title">
    //                     <h2>精選照片</h2>
    //                     <p>精選照片</p>
    //                 </div>
    //             </div>

    //             <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">

    //                 <div class="row g-0">

    //                     <div class="col-lg-3 col-md-4">
    //                         <div class="gallery-item">
    //                             <a href={galleryOne} class="gallery-lightbox" data-gall="gallery-item">
    //                                 <img src={galleryOne} alt="" class="img-fluid" />
    //                             </a>
    //                         </div>
    //                     </div>

    //                     <div class="col-lg-3 col-md-4">
    //                         <div class="gallery-item">
    //                             <a href={galleryTwo} class="gallery-lightbox" data-gall="gallery-item">
    //                                 <img src={galleryTwo} alt="" class="img-fluid" />
    //                             </a>
    //                         </div>
    //                     </div>

    //                     <div class="col-lg-3 col-md-4">
    //                         <div class="gallery-item">
    //                             <a href={galleryThree} class="gallery-lightbox" data-gall="gallery-item">
    //                                 <img src={galleryThree} alt="" class="img-fluid" />
    //                             </a>
    //                         </div>
    //                     </div>

    //                     <div class="col-lg-3 col-md-4">
    //                         <div class="gallery-item">
    //                             <a href={galleryFour} class="gallery-lightbox" data-gall="gallery-item">
    //                                 <img src={galleryFour} alt="" class="img-fluid" />
    //                             </a>
    //                         </div>
    //                     </div>

    //                     <div class="col-lg-3 col-md-4">
    //                         <div class="gallery-item">
    //                             <a href="assets/img/gallery/gallery-5.jpg" class="gallery-lightbox" data-gall="gallery-item">
    //                                 {/* <img src="assets/img/gallery/gallery-5.jpg" alt="" class="img-fluid"> */}
    //                             </a>
    //                         </div>
    //                     </div>

    //                     <div class="col-lg-3 col-md-4">
    //                         <div class="gallery-item">
    //                             <a href="assets/img/gallery/gallery-6.jpg" class="gallery-lightbox" data-gall="gallery-item">
    //                                 {/* <img src="assets/img/gallery/gallery-6.jpg" alt="" class="img-fluid"> */}
    //                             </a>
    //                         </div>
    //                     </div>

    //                     <div class="col-lg-3 col-md-4">
    //                         <div class="gallery-item">
    //                             <a href="assets/img/gallery/gallery-7.jpg" class="gallery-lightbox" data-gall="gallery-item">
    //                                 {/* <img src="assets/img/gallery/gallery-7.jpg" alt="" class="img-fluid"> */}
    //                             </a>
    //                         </div>
    //                     </div>

    //                     <div class="col-lg-3 col-md-4">
    //                         <div class="gallery-item">
    //                             <a href="assets/img/gallery/gallery-8.jpg" class="gallery-lightbox" data-gall="gallery-item">
    //                                 {/* <img src="assets/img/gallery/gallery-8.jpg" alt="" class="img-fluid"> */}
    //                             </a>
    //                         </div>
    //                     </div>

    //                 </div>

    //             </div>
    //         </section>
    //     </div>
    // );
};

export default Gallery;