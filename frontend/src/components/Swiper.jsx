// Import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import images
import birthdayImg from "../img/event-birthday.jpg";
import customImg from "../img/event-custom.jpg";
import privateImg from "../img/event-private.jpg";
import faviconImg from "../img/events-bg.jpg";

function Expo() {
    return (
        <div>
            <section id="events" class="events">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>優惠活動</h2>
                        <p>優惠活動</p>
                    </div>

                    <div class="events-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div>
                            <Swiper
                                // install Swiper modules
                                loop={false}
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}

                                speed={600}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}
                            >
                                <SwiperSlide>
                                    <div class="row event-item">
                                        <div class="col-lg-6">
                                            <img src={birthdayImg} class="img-fluid" alt="birthday" />
                                        </div>
                                        <div class="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Birthday Parties</h3>
                                            <div class="price">
                                                <p><span>$189</span></p>
                                            </div>
                                            <p class="fst-italic">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua.
                                            </p>
                                            <ul>
                                                <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            </ul>
                                            <p>
                                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="row event-item">
                                        <div class="col-lg-6">
                                            <img src={customImg} class="img-fluid" alt="asdf" />
                                        </div>
                                        <div class="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Airthday Parties</h3>
                                            <div class="price">
                                                <p><span>$189</span></p>
                                            </div>
                                            <p class="fst-italic">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua.
                                            </p>
                                            <ul>
                                                <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            </ul>
                                            <p>
                                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="row event-item">
                                        <div class="col-lg-6">
                                            <img src={privateImg} class="img-fluid" alt="dfsa" />
                                        </div>
                                        <div class="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Cirthday Parties</h3>
                                            <div class="price">
                                                <p><span>$189</span></p>
                                            </div>
                                            <p class="fst-italic">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua.
                                            </p>
                                            <ul>
                                                <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            </ul>
                                            <p>
                                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="row event-item">
                                        <div class="col-lg-6">
                                            <img src={faviconImg} class="img-fluid" alt="qwer" />
                                        </div>
                                        <div class="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Dirthday Parties</h3>
                                            <div class="price">
                                                <p><span>$189</span></p>
                                            </div>
                                            <p class="fst-italic">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua.
                                            </p>
                                            <ul>
                                                <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            </ul>
                                            <p>
                                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Expo;