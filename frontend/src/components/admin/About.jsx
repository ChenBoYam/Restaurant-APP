import React from 'react';
import { Link } from "react-router-dom";

const About = () => {

  return (
    <div className='home-container'>
      <h1 className='home-title'>About</h1>

      <Link to={"/"}>home</Link>
    </div>
  );
};

export default About;