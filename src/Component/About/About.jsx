
import React from 'react'
import "./About.css"
import profile from "../../assets/profile.jpg";
import theme from "../../assets/theme_pattern.svg"

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About me</h1>
              <img src={theme} alt="theme" />  

        </div>

        <div className="about-section">
            <div className="about-left">
                <img src={profile} alt="profile"  style={{height:"400px",width:"400px",borderRadius:"20px"}}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Experienced in building web projects with the MERN stack.</p>
                    <p>I've developed several applications that showcase my skills in creating responsive and user-friendly interfaces.</p>
                </div>
                     <div className="about-skills">
                        <div className="about-skill"> <p>HTML & CSS  </p> <hr style={{width:"80%"}} /></div>
                        <div className="about-skill"> <p>React JS</p> <hr  style={{width:"60%"}}/></div>
                        <div className="about-skill"> <p>JavaScript</p> <hr  style={{width:"70%"}}/></div>
                        <div className="about-skill"> <p>MongoDB </p> <hr  style={{width:"50%"}}/></div>
                        <div className="about-skill"> <p>ExpressJS & NodeJS </p> <hr  style={{width:"50%"}}/></div>
                     </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement"><h1>4 </h1><p>Months Experience</p></div> <hr />
            <div className="about-achievement"><h1> 20+ </h1><p>Project Completed</p></div><hr />
            <div className="about-achievement"><h1>1 </h1><p>Happy Client</p></div>
        </div>

        
    </div>
  )
}
export default About