import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Events from "./Events";
import Contact from "./Contact";
import { Button } from 'react-bootstrap';



function Admin() {
    return (
        <div>
            <Routes>
                <Route index element={<Home />} path='/'></Route>
                <Route element={<About />} path='/about'></Route>
                <Route element={<Menu />} path='/menu'></Route>
                <Route element={<Gallery />} path='/gallery'></Route>
                <Route element={<Events />} path='/events'></Route>
                <Route element={<Contact />} path='/contact'></Route>
            </Routes>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button className="mt-4">
                    <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>home</Link>
                </Button>
            </div>
        </div>
    );
};

export default Admin;