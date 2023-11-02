import { forwardRef } from "react";
import '../App.css';
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = forwardRef(function Contact(props, ref) {
const form = useRef();
  const HandleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jfmb6gk",
        "template_aqmbp8c",
        form.current,
        "wQQBsuIWrYuMY4K3N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
    return(
        <div ref={ref}>
            <div className="contact-title">
                    <h1 className= "secondary-h1"><p>Contact <span style={{color: "#00599C"}}>Me</span></p></h1>
            </div>
            <div className="contact-box">
                <form className="contactForm" ref={form} onSubmit={HandleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="user_name"
                        required
                    />
                    <input type="text" placeholder="Enter Your Email Address" name="user_email" required />
                    <input
                        type="text"
                        placeholder="Enter Your Subject"
                        name="user_subject"
                        required
                    />
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                    <button type="submit" className="sendButton">Send Message</button>
                </form>
            </div>

        </div>
    )});

export default Contact;