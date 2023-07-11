import React from "react";


function Hero() {
    return (
        <div>
            <section id="hero" class="d-flex align-items-center">
                <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                    <div class="row">
                        <div class="col-lg-8">
                            <h1>歡迎光臨 <span>三餐暖食</span></h1>
                            <h2>暖口 暖心 暖胃</h2>

                            <div class="btns">
                                <a href="#menu" class="btn-menu animated fadeInUp scrollto">菜單</a>
                                <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">訂位</a>
                            </div>
                        </div>
                        {/* <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                            <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" class="glightbox play-btn"></a>
                        </div> */}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;