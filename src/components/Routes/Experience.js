import React from "react";
import './experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faJava, faJs, faNodeJs, faReact, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';





const Experience = () => (
    <div className="experienceBox">
    <h1 className="title">Experience</h1>
    <div className="codeClan">
    
    <h2 className="title">CodeClan</h2>
      <p> CodeClan is a private SQA accredited digital skills academy, aimed at teaching the fundamentals of Software
      Development. Over the course of 16-weeks, I completed over 800 hours worth of hands on coding,
      through solo and team projects, code-along and practical instructor lead lessons.
      Over this period I have developed an understanding of the following skills and Technologies: </p>


    </div>
   <div className="skillsBox">
   <h3>Skills</h3>

    <ul className="skills">
    
      <li className="card">Java & JavaScript</li>
      <li className="card">CSS & HTML</li>
      <li className="card">Node.js</li>
      <li className="card">React</li>
      <li className="card">MongoDB and SQL</li>
      <li className="card">TDD and OOP</li>
      <li className="card">Version Control Git</li>
      <li className="card">SOLID principles</li>
      <li className="card">Version Control Git</li>
      <li className="card">Agile Methodologies</li>
    </ul>

   </div>
   <div className="backgroundBox">
   <h2 className="title">Background</h2>
    <p>Graduated in Business Administration, I have developed a career in management where I gained vast knowledge
    of the retail industry as Customer and Trading Manager, demonstrating my ability to use 
    the data and technology available to deliver the best customer experience to the lowest possible cost.  
    This was achieved by analysing Store and Regional data to achieve Sales, Waste, Shrink and Labour targets.
    Some of the tools used were company's own data base (RSS), Kronos for labour management and Excel. </p>
      
   </div>
   
    
    </div>
  );


export default Experience;