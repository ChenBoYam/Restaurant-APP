import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Events from "./Events";
import Contact from "./Contact";


function Admin() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path={'/'}></Route>
                    <Route element={<About />} path='/about'></Route>
                    <Route element={<Menu />} path='/menu'></Route>
                    <Route element={<Gallery />} path='/gallery'></Route>
                    <Route element={<Events />} path='/events'></Route>
                    <Route element={<Contact />} path='/contact'></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Admin;