import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div className='home-container'>
            <h1 className='home-title'>Home</h1>
            <div className="links-container">
                <Link to={"/about"}>about</Link><br />
                <Link to={"/menu"}>menu</Link><br />
                <Link to={"/gallery"}>gallery</Link><br />
                <Link to={"/contact"}>contact</Link><br />
                <Link to={"/events"}>events</Link><br />
            </div>
        </div>
    );
};

export default Home;