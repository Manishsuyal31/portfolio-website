import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vm5fu97",
        "template_agj9c48",
        formRef.current,
        "1a7uVnLDt323B4VPU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
          setTimeout(() => {
            setDone(false);
          },5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-texts">
        <h className="c-heading">Contact Info.</h>
        <p className="c-heading-desc">
          Contact Info of mine , feel free to message me with you contact details i will revert back to you soon !
        </p>
      </div>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 91190 96586
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              manishsuyal948@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Nanital, Uttarakhand India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="from_name" />
            <input type="text" placeholder="Subject" name="subject" />
            <input type="text" placeholder="Email" name="from_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && " Thank you, your message has been delivered..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;