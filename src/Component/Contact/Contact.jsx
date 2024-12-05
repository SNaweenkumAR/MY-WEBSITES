
  import React from 'react';
  import './Contact.css';
  import theme from '../../assets/theme_pattern.svg';
  import mail from '../../assets/mail_icon.svg';
  import location from '../../assets/location_icon.svg'
  import call from '../../assets/call_icon.svg';
  
   const Contact = () => {
          
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5dcf287d-d87c-42b9-b4b4-5ab06524a3ac");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        alert("Form not Submitted");
      }
    };

    return (
      <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme} alt="theme" />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>"I'm available and eager to work with companies looking for a dedicated and skilled Full Stack Web Developer. Reach out to discuss how I can contribute to your team with expertise in the MERN stack and a passion for innovation." </p>
                <div className="contact-details">
                    <div className="contact-detail">
                       <img src={mail} alt="" /><p>naween1924@gmail.com</p>
                    </div>
                </div>
                <div className="contact-details">
                    <div className="contact-detail">
                       <img src={call} alt="" /><p>+91 9342973773</p>
                    </div>
                </div>
                <div className="contact-details">
                    <div className="contact-detail">
                       <img src={location} alt="" /> <p>Coimbatore</p>
                    </div>
                </div>
            </div>

            <form  onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name :</label>
                <input type="text" placeholder='Enter Your Name'  name='name' required/>

                <label htmlFor="">Your E-mail :</label>
                <input type="text"  placeholder='Enter Your E-mail' name='email' required/>

                <label htmlFor="">Write Your Message here :</label>
          <textarea name="message" rows={6} placeholder='Enter Your message' required></textarea>

          <button className="contact-submit" type='submit'>Submit now</button>
               
            </form>
        </div>

      </div>
    )
  }

  export default Contact
  
