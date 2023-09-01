// Import Swiper
import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import images
function Events() {
  const [images, setImages] = useState([]);
  const uploadPath = "http://localhost:3500/"
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/event`);
        // const response = await axios.get('http://localhost:3500/admin/event');
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();


  }, []);
  return (
    <div>
      <section id="events" class="events">
        {/* <div class="container" data-aos="fade-up"> */}
        <div class="container">
          <div class="section-title">
            <h2>最新消息</h2>
            <p>最新消息</p>
          </div>

          {/* <div class="events-slider swiper" data-aos="fade-up" data-aos-delay="100"> */}
          <div class="events-slider swiper">
            <div>
              <Swiper
                // install Swiper modules
                loop={false}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={2}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

                speed={600}
                autoplay={{
                  disableOnInteraction: false
                }}
              >
                {images.map(image => (
                  <SwiperSlide key={image._id}>
                    <Container>
                      <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                          {/* Display image from the database */}
                          <img src={uploadPath + image.path} class="img-fluid" alt={image.eventName || "Image from database"} />
                        </Col>
                        <Col lg={1}></Col>
                      </Row>
                    </Container>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;