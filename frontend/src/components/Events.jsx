// Import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import images
import updateCombo from "../img/最新消息/升級套餐.jpg"
import joinMember from "../img/最新消息/加入會員.jpg";
import takeOff from "../img/最新消息/外帶優惠.jpg";
import businessLunch from "../img/最新消息/商業午餐.jpg";
function Expo() {
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
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

                speed={600}
                autoplay={{
                  disableOnInteraction: false
                }}
              >
                <SwiperSlide>
                  <Container>
                    <Row>
                      <Col lg={1}>
                      </Col>
                      <Col lg={5}>
                        <img src={updateCombo} class="img-fluid" alt="updateCombo" />
                      </Col>
                      <Col lg={5}>
                        <img src={joinMember} class="img-fluid" alt="joinMember" />
                      </Col>
                      <Col lg={1}>
                      </Col>
                    </Row>

                  </ Container>

                  {/* <div class="row event-item">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-5">
                      <img src={updateCombo} class="img-fluid" alt="birthday" />
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>升級豪華套餐</h3>
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
                        A套餐，超美味秘製荷包蛋飯、可可千層蛋糕，以及飲料全品項升級，三種優惠一次滿足 <br />
                        B套餐，用可可千層蛋糕作為甜點能量的補充！當然，飲料也能升級 <br />
                        C套餐，用美味的秘製荷包蛋飯與升級飲料來慰勞自己 <br />
                      </p>
                    </div>
                  </div> */}
                </SwiperSlide>
                <SwiperSlide>
                  <Container>
                    <Row>
                      <Col lg={1}>
                      </Col>
                      <Col lg={5}>
                        <img src={takeOff} class="img-fluid" alt="takeOff" />
                      </Col>
                      <Col lg={5}>
                        <img src={businessLunch} class="img-fluid" alt="businessLunch" />
                      </Col>
                      <Col lg={1}>
                      </Col>
                    </Row>

                  </ Container>

                  {/* <div class="row event-item">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-5">
                      <img src={updateCombo} class="img-fluid" alt="birthday" />
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>升級豪華套餐</h3>
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
                        A套餐，超美味秘製荷包蛋飯、可可千層蛋糕，以及飲料全品項升級，三種優惠一次滿足 <br />
                        B套餐，用可可千層蛋糕作為甜點能量的補充！當然，飲料也能升級 <br />
                        C套餐，用美味的秘製荷包蛋飯與升級飲料來慰勞自己 <br />
                      </p>
                    </div>
                  </div> */}
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div class="row event-item">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-5">
                      <img src={joinMember} class="img-fluid" alt="asdf" />
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>加入會員集點</h3>
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
                        來店消費填寫簡單資料即可成為會員，無使用期限 <br />
                        加入會員後，來店消費滿30元即贈1點，1點即為1元，下次消費報電話就可直接折抵 <br />
                        生日月份享有特別優惠，壽星9折優惠，同行朋友95折優惠，生日當天再加贈小禮物 <br />
                        這麼超值的會員福利，您絕對不能錯過！趕快加入我們吧 <br />

                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="row event-item">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-5">
                      <img src={takeOff} class="img-fluid" alt="dfsa" />
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>外帶九折</h3>
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
                        三餐暖食「外帶9折」活動已經開跑囉！ <br />
                        電話訂餐、線上LINE訂餐還是現場訂餐，外帶通通享9折優惠 <br />
                        喜歡在家享受餐點的朋友，千萬別錯過本次優惠活動！ <br />
                        (外帶一樣可以報會員累積點數喔！) <br />
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="row event-item">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-5">
                      <img src={businessLunch} class="img-fluid" alt="qwer" />
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>商業午餐</h3>
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
                        
                      </p>
                    </div>
                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expo;