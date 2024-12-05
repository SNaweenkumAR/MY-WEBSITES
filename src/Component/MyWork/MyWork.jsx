 import React from 'react';
 import './MyWork.css';
 import theme from '../../assets/theme_pattern.svg';
 import mywork_data from '../../assets/mywork_data';
 import icon from '../../assets/arrow_icon.svg'
 
  const Mywork = () => {
   return (
     <div className='mywork' id='work'>
        <div className="mywork-title">
            <h1>My latest Work</h1>
            <img src={theme} alt="theme" />

        </div>
        <div className="mywork-container">
           {mywork_data.map((work,index) => {
                return <img key={index} src={work.w_img} alt="img" />;
           })}
        </div>

        <div className="mywork-showmore">
             <p>Show more</p>
             <img src={icon} alt="" />
        </div>
     </div>
   )
 }

 export default Mywork
 