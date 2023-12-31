import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer() {
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
            <footer id="footer">
                <div className="text-center">
                    <Button className="admin-btn"><Link to="/admin">ADMIN</Link></Button>
                </div>
            </footer>
        </div>
    );
    // return (
    //     <div>
    //         <footer id="footer">
    //             <div class="footer-top">
    //                 <div class="container">
    //                     <div class="row">

    //                     <div class="footer-container">
    //                             <div class="col-lg-3 col-md-6">
    //                                 <div class="footer-info">
    //                                     <h3>三餐暖食</h3>
    //                                     <p>
    //                                         高雄市苓雅區中興街167號 <br />
    //                                         {/* NY 535022, USA<br /> */}
    //                                         <strong>Phone:</strong> (07)334-6263<br />
    //                                         <strong>Email:</strong> info@example.com<br />
    //                                     </p>
    //                                     <div class="social-links mt-3">
    //                                         <a href="/#" class="twitter"><i class="bx bxl-twitter"></i></a>
    //                                         <a href="/#" class="facebook"><i class="bx bxl-facebook"></i></a>
    //                                         <a href="/#" class="instagram"><i class="bx bxl-instagram"></i></a>
    //                                         <a href="/#" class="google-plus"><i class="bx bxl-skype"></i></a>
    //                                         <a href="/#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                         {/* <div class="col-lg-2 col-md-6 footer-links">
    //                             <h4>Useful Links</h4>
    //                             <ul>
    //                                 <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
    //                                 <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
    //                                 <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
    //                                 <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
    //                                 <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
    //                             </ul>
    //                         </div> */}

    //                         {/* <div class="col-lg-3 col-md-6 footer-links">
    //                             <h4>Our Services</h4>
    //                             <ul>
    //                                 <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
    //                                 <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
    //                                 <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
    //                                 <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
    //                                 <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
    //                             </ul>
    //                         </div> */}

    //                         {/* <div class="col-lg-4 col-md-6 footer-newsletter">
    //                             <h4>Our Newsletter</h4>
    //                             <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
    //                             <form action="" method="post">
    //                                 <input type="email" name="email" /><input type="submit" value="Subscribe" />
    //                             </form>
    //                         </div> */}

    //                     </div>
    //                 </div>
    //             </div>

    //             {/* <div class="container">
    //                 <div class="copyright">
    //                     &copy; Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
    //                 </div>
    //                 <div class="credits">
    //                     <!-- All the links in the footer should remain intact. -->
    //                         <!-- You can delete the links only if you purchased the pro version. -->
    //                         <!-- Licensing information: https://bootstrapmade.com/license/ -->
    //                         <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/restaurantly-restaurant-template/ -->
    //                     Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    //                 </div>
    //             </div> */}
    //         </footer>
    //     </div>
    // );
};

export default Footer;