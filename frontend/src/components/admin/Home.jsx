import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div className='home-container'>
            <h1 className='home-title'>Home</h1>
            <div className="links-container">
                <Link to={"/admin/about"}>about</Link>
                <Link to={"/admin/menu"}>menu</Link>
                <Link to={"/admin/gallery"}>gallery</Link>
                <Link to={"/admin/contact"}>contact</Link>
                <Link to={"/admin/events"}>events</Link>
            </div>
        </div>
    );
};

export default Home;