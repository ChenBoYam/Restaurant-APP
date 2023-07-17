import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Login from './Login';

function Header() {
  const handleNavClick = (e, target) => {
    e.preventDefault();
    const offset = 78; // Height of the fixed header
    const element = document.querySelector(target);
    const topPosition = element.offsetTop - offset;

    window.scrollTo({
      top: topPosition,
      behavior: 'smooth',
    });
  };

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
                <Nav.Link href="#hero" className="nav-link scrollto mr-4" onClick={(e) => handleNavClick(e, '#hero')}>
                  首頁
                </Nav.Link>
                <Nav.Link href="#about" className="nav-link scrollto mr-4" onClick={(e) => handleNavClick(e, '#about')}>
                  關於
                </Nav.Link>
                <Nav.Link href="#menu" className="nav-link scrollto mr-4" onClick={(e) => handleNavClick(e, '#menu')}>
                  暖食菜單
                </Nav.Link>
                <Nav.Link href="#specials" className="nav-link scrollto mr-4" onClick={(e) => handleNavClick(e, '#specials')}>
                  特選佳餚
                </Nav.Link>
                <Nav.Link href="#events" className="nav-link scrollto mr-4" onClick={(e) => handleNavClick(e, '#events')}>
                  優惠活動
                </Nav.Link>
                <Nav.Link href="#gallery" className="nav-link scrollto mr-4" onClick={(e) => handleNavClick(e, '#gallery')}>
                  精選照片
                </Nav.Link>
                <Nav.Link href="#contact" className="nav-link scrollto" onClick={(e) => handleNavClick(e, '#contact')}>
                  聯絡我們
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

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
}

export default Header;
