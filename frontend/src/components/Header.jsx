import React from "react";


function Header() {
    return (
        <div>
            <header id="header" class="fixed-top d-flex align-items-cente">
                <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

                    <h1 class="logo me-auto me-lg-0"><a href="index.html">三餐暖食</a></h1>

                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><a class="nav-link scrollto active" href="#hero">首頁</a></li>
                            <li><a class="nav-link scrollto" href="#about">關於</a></li>
                            <li><a class="nav-link scrollto" href="#menu">暖食菜單</a></li>
                            <li><a class="nav-link scrollto" href="#specials">特選佳餚</a></li>
                            <li><a class="nav-link scrollto" href="#events">優惠活動</a></li>
                            {/* <li><a class="nav-link scrollto" href="#chefs">Chefs</a></li> */}
                            <li><a class="nav-link scrollto" href="#gallery">精選照片</a></li>
                            {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li> */}
                            <li><a class="nav-link scrollto" href="#contact">聯絡我們</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <a href="#book-a-table" class="book-a-table-btn scrollto d-none d-lg-flex">訂位</a>

                </div>
            </header>
        </div>
    );
};

export default Header;