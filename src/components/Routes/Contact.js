import React from "react";
import './contact.css'

const Contact = () => (
    <div className="Card">
      <h1>Contact Details</h1>
      <p>Name: Alejandro Garcia</p>
      <p>Email: alejandrojg8@gmail.com</p>
      <p>Mobile: 07482581965</p>
      <p>Location: Glasgow, UK - Flexible</p>

    <h2>Follow me on</h2>
    <ul class="social-icons">
        <li><a href="https://twitter.com/AlexJustman" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/in/alejandrojuradogarciabusiness8/" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
        <li><a href="https://github.com/ajurgar" class="social-icon"> <i class="fa fa-github"></i></a></li>
    </ul>
    </div>
  );
  


export default Contact;