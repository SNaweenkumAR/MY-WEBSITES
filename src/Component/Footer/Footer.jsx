 import React from 'react';
 import './Footer.css';
 import logo from '../../assets/logo.png';
 import user from '../../assets/user_icon.svg';
 

 
 const Footer = () => {
   return (
     <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>"Crafted with passion and dedication. Let's build something amazing together!"</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user} alt="" />
                        <input type="email" name="" placeholder='Enter Your E-mail' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
          <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Naveen Kumar. Open to exciting web development roles!</p>
                <div className="footer-bottom-right">
                <p>Made by  Naveen Kumar.s</p>
                <p> Available for projects and new opportunities.</p>
                <p>Thanks for visiting! Ready to collaborate? Let's connect.</p>
                </div>
            </div>

     </div>
   )
 }
 
 export default Footer