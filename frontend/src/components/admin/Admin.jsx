import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Events from "./Events";
import Contact from "./Contact";
import Login from "./Login";
import { Button } from 'react-bootstrap';



function Admin() {
    const [authenticated, setAuthenticated] = useState(localStorage.getItem('authenticated') === 'true');

    const handleLogin = () => {
        setAuthenticated(true);
        localStorage.setItem('authenticated', 'true');
    };

    const handleLogout = () => {
        setAuthenticated(false);
        localStorage.removeItem('authenticated');
    };

    useEffect(() => {
        setAuthenticated(localStorage.getItem('authenticated') === 'true');
    }, []);


    return (
        <div>
            {authenticated ?
                (<div>
                    <Routes>
                        <Route index element={<Home />} path='/'></Route>
                        <Route element={<About />} path='/about'></Route>
                        <Route element={<Menu />} path='/menu'></Route>
                        <Route element={<Gallery />} path='/gallery'></Route>
                        <Route element={<Events />} path='/events'></Route>
                        <Route element={<Contact />} path='/contact'></Route>
                    </Routes>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button className="m-4">
                            <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>首頁</Link>
                        </Button>
                        <Button onClick={handleLogout} className="m-4">
                            登出
                        </Button>
                    </div>
                </div>) :
                (<div>
                    <Login onLogin={handleLogin} />
                </div>)}
        </div>
    );
};

export default Admin;