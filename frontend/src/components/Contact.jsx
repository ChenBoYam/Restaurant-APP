import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Contact = () => {
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
            <section id="contact" className="contact">
                <Container data-aos="fade-up">
                    <div className="section-title">
                        <h2>聯絡我們</h2>
                        <p>聯絡我們</p>
                    </div>
                </Container>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div data-aos="fade-up" style={{ width: "84%" }}>
                        <iframe
                            style={{ border: "0", width: "100%", height: "400px" }}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14731.679068291161!2d120.3034591!3d22.6194711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e051f9658a3c7%3A0x4faa907c551d36ba!2z5LiJ6aSQ5pqW6aOf!5e0!3m2!1sen!2stw!4v1689065876343!5m2!1sen!2stw"
                            title="googleMap"
                            allowFullScreen
                        />
                    </div>
                </div>

                <Container data-aos="fade-up">
                    <Row className="mt-5">
                        <Col lg={4}>
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>地點:</h4>
                                    <p>高雄市 苓雅區 中興街 167號</p>
                                </div>

                                <div className="open-hours">
                                    <i className="bi bi-clock"></i>
                                    <h4>營業時間:</h4>
                                    <p>
                                        星期一到星期日: <br />
                                        11:00 AM - 20:45 PM
                                    </p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>信箱:</h4>
                                    <p>threemealwarmfood@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>電話:</h4>
                                    <p>(07) 334-6263</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={8} className="mt-5 mt-lg-0">
                            <Form className="php-email-form">
                                <Row>
                                    <Col md={6} className="form-group">
                                        <Form.Control type="text" name="name" id="name" placeholder="姓名" required />
                                    </Col>
                                    <Col md={6} className="form-group mt-3 mt-md-0">
                                        <Form.Control type="email" name="email" id="email" placeholder="電子信箱" required />
                                    </Col>
                                </Row>
                                <Form.Group className="mt-3" controlId="subject">
                                    <Form.Control type="text" name="subject" placeholder="標題" required />
                                </Form.Group>
                                <Form.Group className="mt-3" controlId="message">
                                    <Form.Control as="textarea" name="message" rows={8} placeholder="內容" required />
                                </Form.Group>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    <Button type="submit">發送訊息</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Contact;



// import React from "react";


// function Contact() {
//     return (
//         <div>
//             <section id="contact" class="contact">
//                 <div class="container" data-aos="fade-up">

//                     <div class="section-title">
//                         <h2>聯絡我們</h2>
//                         <p>聯絡我們</p>
//                     </div>
//                 </div>
//                 <div style={{ display: "flex", justifyContent: "center" }}>
//                     <div data-aos="fade-up" style={{ width: "75%" }}>
//                         <iframe style={{ border: "0", width: "100%", height: "400px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14731.679068291161!2d120.3034591!3d22.6194711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e051f9658a3c7%3A0x4faa907c551d36ba!2z5LiJ6aSQ5pqW6aOf!5e0!3m2!1sen!2stw!4v1689065876343!5m2!1sen!2stw" frameborder="0" allowfullscreen title="googleMap"></iframe>
//                     </div>
//                 </div>

//                 <div class="container" data-aos="fade-up">

//                     <div class="row mt-5">

//                         <div class="col-lg-4">
//                             <div class="info">
//                                 <div class="address">
//                                     <i class="bi bi-geo-alt"></i>
//                                     <h4>地點:</h4>
//                                     <p>高雄市 苓雅區 中興街 167號</p>
//                                 </div>

//                                 <div class="open-hours">
//                                     <i class="bi bi-clock"></i>
//                                     <h4>營業時間:</h4>
//                                     <p>
//                                         星期一到星期日: <br />
//                                         11:00 AM - 20:45 PM
//                                     </p>
//                                 </div>

//                                 <div class="email">
//                                     <i class="bi bi-envelope"></i>
//                                     <h4>信箱:</h4>
//                                     <p>threemealwarmfood@gmail.com</p>
//                                 </div>

//                                 <div class="phone">
//                                     <i class="bi bi-phone"></i>
//                                     <h4>電話:</h4>
//                                     <p>(07) 334-6263</p>
//                                 </div>

//                             </div>

//                         </div>

//                         <div class="col-lg-8 mt-5 mt-lg-0">

//                             <form action="" method="post" class="php-email-form">
//                                 <div class="row">
//                                     <div class="col-md-6 form-group">
//                                         <input type="text" name="name" class="form-control" id="name" placeholder="姓名" required />
//                                     </div>
//                                     <div class="col-md-6 form-group mt-3 mt-md-0">
//                                         <input type="email" class="form-control" name="email" id="email" placeholder="電子信箱" required />
//                                     </div>
//                                 </div>
//                                 <div class="form-group mt-3">
//                                     <input type="text" class="form-control" name="subject" id="subject" placeholder="標題" required />
//                                 </div>
//                                 <div class="form-group mt-3">
//                                     <textarea class="form-control" name="message" rows="8" placeholder="內容" required></textarea>
//                                 </div>
//                                 <div class="my-3">
//                                     <div class="loading">Loading</div>
//                                     <div class="error-message"></div>
//                                     <div class="sent-message">Your message has been sent. Thank you!</div>
//                                 </div>
//                                 <div class="text-center"><button type="submit">發送訊息</button></div>
//                             </form>

//                         </div>

//                     </div>

//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Contact;