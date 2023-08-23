import React from 'react';
import { Link } from "react-router-dom";


const Menu = () => {

  return (
    <div className='home-container'>
      <h1 className='home-title'>Menu</h1>

      <Link to={"/"}>home</Link>

    </div>
  );
};

export default Menu;