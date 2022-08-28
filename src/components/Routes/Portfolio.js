import React from "react";
import './portfolio.css';
import MyImage from './project.png';





const Portfolio = () =>{

    return(
<div className="outsideContainer">
<h1> Portfolio</h1>
<h3>AJsneakers Tracker</h3>

        <div className="portfolioBox">

      <div className="textContent">
      <p> AJsneakers application allows the user to manage their inventory and manufacturers. 
        Includes functionality to view, edit, delete and add new products/manufacturers to the tracker as
        well as checking markups expected for each product.</p>
        <p>This application was created for personal used to better manage my own
        inventory and be able to keep track of inventory quantities and have
        all the information I need in one place.</p>

      </div>
     </div>

        <div className="picBox">
            
            <img src={MyImage} alt="project1" className="projectOne"/>
                </div>
            
       
        
 
        </div>
        
    )


}


export default Portfolio;
