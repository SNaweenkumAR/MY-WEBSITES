import React, { useState,useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

export default function Navbar() {
const [menu,setmenu]=useState("home");

const menuRef=useRef();

const openMenu = ( ) => {
  menuRef.current.style.right="0";
}
const closeMenu = ( ) => {
  menuRef.current.style.right="-350px";
}


  return (
    <div  className='navbar'>
         <img src={logo} alt="" className='logo'/>
         <img src={menu_open} alt="" className='menu-open' onClick={openMenu}/>
         <ul className='nav-menu' ref={menuRef}>
          <img src={menu_close} alt="" className="menu-close" onClick={closeMenu}/>
         <li > <AnchorLink className='anchor'  href='#home'> <p onClick={() => setmenu("home")}>Home</p> </AnchorLink>{menu === "home" ? <img src={underline} alt=""></img> : ""}</li>
         <li> <AnchorLink className='anchor' offset={50} href='#about'> <p  onClick={() => setmenu("about")} >About me</p></AnchorLink> {menu === "about" ? <img src={underline} alt=""></img> : ""}</li>
         <li>  <AnchorLink className='anchor' offset={50} href='#services'><p  onClick={() => setmenu("services")}>Services</p> </AnchorLink>{menu === "services" ? <img src={underline} alt=""></img> : ""}</li>
         <li><AnchorLink className='anchor' offset={50} href='#work'><p  onClick={() => setmenu("work")}>Portfolio</p></AnchorLink> {menu === "work" ? <img src={underline} alt=""></img> : ""}</li>
         <li> <AnchorLink className='anchor' offset={50} href='#contact'> <p  onClick={() => setmenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt=""></img> : ""}</li>

         </ul>

         <div className="nav-connect"><AnchorLink className='anchor' offset={50} href='#contact'> Connect with me</AnchorLink></div>
    </div>
  )
}
