
import React from 'react';
import "./Hero.css";
import profile from "../../assets/profile-1.jpeg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

 const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile} alt="Image" className='profile' />
        <h1 > <span className='span'>I'm Naveen Kumar,</span> a Full Stack Web Developer skilled in the MERN stack. </h1>
        <p>Passionate about building dynamic and responsive web applications.</p>

        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor' offset={50} href='#contact'> Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}
 export default Hero