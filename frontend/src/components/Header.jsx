import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";

import Login from './Login';
import ReservationForm from "./Reservation";
import logoImg from "../img/3mealfood_logo.png" 

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
            <a href="index.html"> <img src={logoImg} alt="logo"/></a>
          </h1>

          <Navbar expand="lg" id="navbar" className="order-last order-lg-0 mb-3 mb-lg-0">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-nav-toggle" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#hero" className="nav-link scrollto mr-4" onClick={(e) => handleNavClick(e, '#hero')}>
                  首頁
                </Nav.Link>
                <Nav.Link href="#events" className="nav-link scrollto mr-4" onClick={(e) => handleNavClick(e, '#events')}>
                  最新消息
                </Nav.Link>
                <Nav.Link href="#about" className="nav-link scrollto mr-4" onClick={(e) => handleNavClick(e, '#about')}>
                  關於我們
                </Nav.Link>
                <Nav.Link href="#menu" className="nav-link scrollto mr-4" onClick={(e) => handleNavClick(e, '#menu')}>
                  暖食菜單
                </Nav.Link>
                <Nav.Link href="#gallery" className="nav-link scrollto mr-4" onClick={(e) => handleNavClick(e, '#gallery')}>
                  精選照片
                </Nav.Link>
                <Nav.Link href="#contact" className="nav-link scrollto" onClick={(e) => handleNavClick(e, '#contact')}>
                  聯絡我們
                </Nav.Link>
                <Button className="m-4">
                  <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>home</Link>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <Login />
            <ReservationForm />
          </div>

        </Container>
      </header>
    </div>
  );
}

export default Header;
