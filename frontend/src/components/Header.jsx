import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Login from './Login';


function Header() {
    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-center">
                <Container fluid="xl" className="d-flex align-items-center justify-content-lg-between">
                    <h1 className="logo me-auto me-lg-0">
                        <a href="index.html">三餐暖食</a>
                    </h1>

                    <Navbar expand="lg" id="navbar" className="order-last order-lg-0 mb-3 mb-lg-0">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-nav-toggle" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#hero" className="nav-link scrollto mr-4">
                                    首頁
                                </Nav.Link>
                                <Nav.Link href="#about" className="nav-link scrollto mr-4">
                                    關於
                                </Nav.Link>
                                <Nav.Link href="#menu" className="nav-link scrollto mr-4">
                                    暖食菜單
                                </Nav.Link>
                                <Nav.Link href="#specials" className="nav-link scrollto mr-4">
                                    特選佳餚
                                </Nav.Link>
                                <Nav.Link href="#events" className="nav-link scrollto mr-4">
                                    優惠活動
                                </Nav.Link>
                                <Nav.Link href="#gallery" className="nav-link scrollto mr-4">
                                    精選照片
                                </Nav.Link>
                                <Nav.Link href="#contact" className="nav-link scrollto">
                                    聯絡我們
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {/* <Login /> */}


                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                        <Login />
                        <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">
                            訂位
                        </a>
                    </div>

                </Container>
            </header>
        </div>
    );
    // return (
    //     <div>
    //         <header id="header" class="fixed-top d-flex align-items-cente">
    //             <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

    //                 <h1 class="logo me-auto me-lg-0"><a href="index.html">三餐暖食</a></h1>

    //                 <nav id="navbar" class="navbar order-last order-lg-0">
    //                     <ul>
    //                         <li><a class="nav-link scrollto active" href="#hero">首頁</a></li>
    //                         <li><a class="nav-link scrollto" href="#about">關於</a></li>
    //                         <li><a class="nav-link scrollto" href="#menu">暖食菜單</a></li>
    //                         <li><a class="nav-link scrollto" href="#specials">特選佳餚</a></li>
    //                         <li><a class="nav-link scrollto" href="#events">優惠活動</a></li>
    //                         {/* <li><a class="nav-link scrollto" href="#chefs">Chefs</a></li> */}
    //                         <li><a class="nav-link scrollto" href="#gallery">精選照片</a></li>
    //                         {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
    //                             <ul>
    //                                 <li><a href="#">Drop Down 1</a></li>
    //                                 <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
    //                                     <ul>
    //                                         <li><a href="#">Deep Drop Down 1</a></li>
    //                                         <li><a href="#">Deep Drop Down 2</a></li>
    //                                         <li><a href="#">Deep Drop Down 3</a></li>
    //                                         <li><a href="#">Deep Drop Down 4</a></li>
    //                                         <li><a href="#">Deep Drop Down 5</a></li>
    //                                     </ul>
    //                                 </li>
    //                                 <li><a href="#">Drop Down 2</a></li>
    //                                 <li><a href="#">Drop Down 3</a></li>
    //                                 <li><a href="#">Drop Down 4</a></li>
    //                             </ul>
    //                         </li> */}
    //                         <li><a class="nav-link scrollto" href="#contact">聯絡我們</a></li>
    //                     </ul>
    //                     <i class="bi bi-list mobile-nav-toggle"></i>
    //                 </nav>
    //                 <a href="#book-a-table" class="book-a-table-btn scrollto d-none d-lg-flex">訂位</a>

    //             </div>
    //         </header>
    //     </div>
    // );
};

export default Header;