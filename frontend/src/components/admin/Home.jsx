import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div className='home-container'>
            <h1 className='home-title'>首頁</h1>
            <div className="links-container">
                <Link to={"/admin/about"}>關於我們</Link>
                <Link to={"/admin/menu"}>暖食菜單</Link>
                <Link to={"/admin/gallery"}>精選照片</Link>
                <Link to={"/admin/contact"}>聯絡我們</Link>
                <Link to={"/admin/events"}>最新消息</Link>
            </div>
        </div>
    );
};

export default Home;