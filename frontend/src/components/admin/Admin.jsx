import React, { useState } from "react";
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
    const [authenticated, setAuthenticated] = useState(false);

    // Function to handle successful login
    const handleLogin = () => {
        setAuthenticated(true);
    };

    // Function to handle logout
    const handleLogout = () => {
        setAuthenticated(false);
    };

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
                            <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>home</Link>
                        </Button>
                        <Button onClick={handleLogout} className="m-4">
                            Logout
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