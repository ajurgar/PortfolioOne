import React from "react";
import './home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";




const img = "https://media-exp1.licdn.com/dms/image/C4D03AQGOrVvYvOySdA/profile-displayphoto-shrink_800_800/0/1661521482272?e=1666828800&v=beta&t=JpngRTd9fSPzGHmQ-N5h7OushdFO5AAgviBb6LeX7VE"

const hand = "https://static.vecteezy.com/system/resources/previews/007/146/237/non_2x/waving-hand-gesture-emoji-color-icon-hello-hi-bye-goodbye-hand-gesturing-greeting-palm-isolated-illustration-vector.jpg"

const Home = () => {


  return (

    <div className="layout">

      <div className="picContainer">
        <img className="pic" src={img} alt="profilePic"></img>



      </div>
      <div className="welcomeText">

        <h1>Alejandro Garcia</h1>
        <h2> Junior Software Developer</h2>
        <p>I am a proactive Software Developer, soon to graduate from the Professional Software Development
          course at CodeClan, with six years of management experience in target driven roles
          and vast knowledge of Business Operations and the retail industry.</p>
        <p>Objective and analytical, I enjoy working my way through problems,
          finding efficient solutions to achieve targets as well as
          taking oppurtinities to investigate new areas and expand my knowledge.</p>

      </div>

      <div>
        <a
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          download
        >
          Download CV
        </a>
      </div>
    </div>


  )


};


export default Home;