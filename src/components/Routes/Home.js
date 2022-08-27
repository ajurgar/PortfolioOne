import React from "react";
import styled from "styled-components";
import './home.css'


const img = "https://media-exp1.licdn.com/dms/image/C4D03AQGOrVvYvOySdA/profile-displayphoto-shrink_800_800/0/1661521482272?e=1666828800&v=beta&t=JpngRTd9fSPzGHmQ-N5h7OushdFO5AAgviBb6LeX7VE"


const Home = () => {


  return (

    <div className="layout">
       <div className="picContainer">
       <img className="pic" src={img}  alt="profilePic"></img>
       <div className="welcomeText">

          <h1>Hi! I’m Alejandro Garcia</h1>
          <p>I’m a Junior Software Developer based in Glasgow, UK.</p>
          <p>I love learning new technologies and making applications
            that can improve people life’s.
          </p>
          <p>I have a background in retail management and e-commerce
            Sales.</p>



        </div>


        </div>
      <div className="boxOne">
        
        <br></br>


      </div>

   
    </div>

  )


};


export default Home;