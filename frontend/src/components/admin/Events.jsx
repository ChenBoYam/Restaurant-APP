import React from 'react';
import { Link } from "react-router-dom";


const Events = () => {

  return (
    <div className='home-container'>
      <h1 className='home-title'>Events</h1>

      <Link to={"/"}>home</Link>

    </div>
  );
};

export default Events;