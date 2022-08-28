import React from "react";
import './home.css'




const img = "https://media-exp1.licdn.com/dms/image/C4D03AQGOrVvYvOySdA/profile-displayphoto-shrink_800_800/0/1661521482272?e=1666828800&v=beta&t=JpngRTd9fSPzGHmQ-N5h7OushdFO5AAgviBb6LeX7VE"

const hand ="https://static.vecteezy.com/system/resources/previews/007/146/237/non_2x/waving-hand-gesture-emoji-color-icon-hello-hi-bye-goodbye-hand-gesturing-greeting-palm-isolated-illustration-vector.jpg"

const Home = () => {


  return (

    <div className="layout">
    
      <div className="picContainer">
        <img className="pic" src={img} alt="profilePic"></img>

        <div className="welcomeText">

          <h1>Alejandro Garcia</h1>
          <p>I am a proactive Software Developer, soon to graduate from the Professional Software Development
      course at CodeClan, with management experience in target driven roles
      and vast knowledge of the retail industry.</p>
      <p>Objective and analytical, I enjoy working my way through problems, 
      finding efficient solutions that meets minimum viable product as well as 
      taking oppurtinities to investigate new areas and expand my knowledge.</p>
       
        </div>


      </div>
    <button className="btn">Download</button>
 
    </div>
    

  )


};


export default Home;