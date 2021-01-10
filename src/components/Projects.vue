<template>
  <div class="Projects">
    <div id="title">Projects</div>
    <div id="slider">
      <input type="radio" name="slider" id="slide1" checked />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
      <input type="radio" name="slider" id="slide4" />
      <input type="radio" name="slider" id="slide5" />
      <input type="radio" name="slider" id="slide6" />
      <input type="radio" name="slider" id="slide7" />

      <div id="slides">
        <div id="overflow">
          <div class="inner">
            <div class="slide slide_1">
              <div class="background-num"><p>1</p></div>
              <div class="content">
                <h1  class="section-title">President and Head of pragramming at UMGDD</h1>
                <div id="line"></div>
                <div class="picture" id="GDD">
                  <img src="../assets/UMGDD.jpeg" alt="GDD picture">
                </div>
                <ul class="section-elements">
                  <li>
                    <p class="header">
                      Languages/APIs used
                    </p>
                    <p class="description">
                      C#
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Programs/IDEs used
                    </p>
                    <p class="description">
                      Unity, Photoshop, Blender and Substance painter
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Description
                    </p>
                    <p class="description">
                      At UMGDD (University of Manitoba Game Design and Development), we provided our members with an environment that allows them to learn and explore their potential. 
                      We had the club split into 3 groups, Programmers, Graphical designers and a Socila media team. 
                      Some of my tasks as a president was to Act as spokesperson for UMGDD to the public, Review resumes and keep records of members, Hold interviews for prospect members
                      and much more. On the other hand, the Head of programming tasks was to Guide the programmers through the process of planning, designing, and producing a final project that 
                      delivers a rewarding interactive gaming experience.
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>

            <div class="slide slide_2">
              <div class="background-num"><p>2</p></div>
              <div class="content">
                <h1 class="section-title">Smart Thermostat Controller</h1>
                <div id="line"></div>
                <div class="picture">
                  <img src="../assets/Thermostat.jpeg" alt="Thermostat image">
                </div>
                <ul class="section-elements">
                  <li>
                    <p class="header">
                      Languages/APIs used
                    </p>
                    <p class="description">
                      C and UART
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Programs/IDEs used
                    </p>
                    <p class="description">
                      Keil uVision5
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Hardware components
                    </p>
                    <p class="description">
                      Cortex M4 microcontroller (with internal temperature sensor), LCD screen, a Potentiometer slider and 2 breadboards
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Description
                    </p>
                    <p class="description">
                      Using the internal temperature sensor of the board, the tempraure was sampled at an appropriate rate in the Cortex M4 microcontroller (μc) on the TM4C1294 LaunchPad.
                      The data was transfered between the TM4C1294 LaunchPad and the computer through an internal UART using a RS232 protocol. 
                      Furhtermore, I designed an interface on the LCD screen to set the desired temperature in the room using the linear potentiometer
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="slide slide_3">
              <div class="background-num"><p>3</p></div>
              <div class="content">
                <h1 class="section-title">Android App for controlling the MX7ck microcontroller</h1>
                <div id="line"></div>
                <div class="picture" >
                  <img src="../assets/AndroidApp.jpeg" alt="Androip App Image">
                </div>
                <ul class="section-elements">
                  <li>
                    <p class="header">
                      Languages/APIs used
                    </p>
                    <p class="description">
                      Java and C
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Programs/IDEs used
                    </p>
                    <p class="description">
                      Android Studio, MPLAB and NetBeans
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Hardware components
                    </p>
                    <p class="description">
                      MX7ck microcontroller, Temperature Sensor and an Android Phone
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Description
                    </p>
                    <p class="description">
                      Designed an Androdid App that implements a Multi-threaded Java TCP/IP Client, a Multi-threaded proxy server that allows connection
                      between the Android Client and the MX7ck board and an MX7ck board that acts as a server. The Android App controls  four  LEDs, monitors  three  push  buttons,  and  
                      reads temperature off of the internal sensor  on  the MX7ck  board and also gets the current time from the proxy server
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="slide slide_4">
              <div class="background-num"><p>4</p></div>
              <div class="content">
                <h1 class="section-title">Python Bot for Stock investigating</h1>
                <div id="line"></div>
                <div class="picture" id="PythonBot">
                  <img src="../assets/PythonBot.jpeg" alt="Code Image">
                </div>
                <ul class="section-elements">
                  <li>
                    <p class="header">
                      Languages/APIs used
                    </p>
                    <p class="description">
                      Python, Selenium, Pandas and AlphaVantage
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Programs/IDEs used
                    </p>
                    <p class="description">
                      VS code
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Hardware components
                    </p>
                    <p class="description">
                      None
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Description
                    </p>
                    <p class="description">
                      By the help of AlphaVantage for providing consistent real-time stock market data, I designed a python bot to continously track winning stocks and decide when to buy. 
                      Similarily, if a stock is owned and is expected to start falling or the increase rate extremely decreases, then the bot sells such stocks. This bot is completely functional and tested
                      on a Virtual Real Time stock marcket website called investopedia  
                    </p>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div class="slide slide_5">
              <div class="background-num"><p>5</p></div>
              <div class="content">
                <h1 class="section-title">TicTacToe vs a Non-Losing AI</h1>
                <div id="line"></div>
                <div class="picture" id="TicTacToe">
                  <img src="../assets/TicTacToe.jpeg" alt="Game Image">
                </div>
                <ul class="section-elements">
                  <li>
                    <p class="header">
                      Languages/APIs used
                    </p>
                    <p class="description">
                      Python and PyGame
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Programs/IDEs used
                    </p>
                    <p class="description">
                      Vim
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Hardware components
                    </p>
                    <p class="description">
                      None
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Description
                    </p>
                    <p class="description">
                      The goal of the project was less of buillding a TicTacToe project and more of implementing the MiniMax Algorithm. The minimax algortihm is one of the 
                      most instresting algorithms i have stumbled upon till now. It is a decision rule thats used in AI, decision theory, game theory, etc. for minimizing the 
                      possible loss for a worst case scenario. In my TicTacToe projects for example, the AI recursievely places its symbol (X or O) in every single empty tile and
                      predicts the outcome from the player and so on. This eliminates the possability that the AI ever loses in a TicTacToe game.  
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="slide slide_6">
              <div class="background-num"><p>6</p></div>
              <div class="content">
                <h1 class="section-title">Logo Designer for KAU</h1>
                <div id="line"></div>
                <div class="picture" id="KAU">
                  <img src="../assets/KAU.jpeg" alt="Logo Image">
                </div>
                <ul class="section-elements">
                  <li>
                    <p class="header">
                      Languages/APIs used
                    </p>
                    <p class="description">
                      None
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Programs/IDEs used
                    </p>
                    <p class="description">
                      Photoshop
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Hardware components
                    </p>
                    <p class="description">
                      None
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Description
                    </p>
                    <p class="description">
                      By using Photoshop, I designed both a logo for the Faculty of tourism 10th year anniversary and for the 4th Star Chef Competition held in King Abdulaziz University
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="slide slide_7">
              <div class="background-num">
                <p>7</p>
              </div>
              <div class="content">
                <h1 class="section-title">Honourable mentions</h1>
                <div id="line"></div>
                <ul class="section-elements">
                  <li>
                    <p class="header">
                      Computer Science courses database
                    </p>
                    <p class="description">
                      Using Neo4J, My class group and I worked towards building a database of all the Computer Science courses with their instructors and their pre-req courses
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Project Anmiator
                    </p>
                    <p class="description">
                      Choosen by a Civil engineering group to add animations to their structure built via AutoCad using Autodesk 3ds Max
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      University of Manitoba Tutor 
                    </p>
                    <p class="description">
                      Currently a Tutor for Computer programming course (COMP 1020)
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Group's Programmer for an Arduino based project
                    </p>
                    <p class="description">
                      In ENG1440, we were assigned a project where we had to build a Cube Mover that automatically chooses a cube and drives to a destination
                      . I was assigned the whole Arduino Programming side of this project
                    </p>
                  </li>
                  <li>
                    <p class="header">
                      Object Counter using an FPGA Board
                    </p>
                    <p class="description">
                      My group and I built an object counter with features like
                      Incrementing/Decrementing, Resetting and Setting a specific value. My task was mainly on the Programming side of things. 
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="controls">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <label for="slide4"></label>
        <label for="slide5"></label>
        <label for="slide6"></label>
        <label for="slide7"></label>
      </div>
      <div id="bullets">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <label for="slide4"></label>
        <label for="slide5"></label>
        <label for="slide6"></label>
        <label for="slide7"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
  }
</script>

<style scoped>
.Projects {
  position: absolute;
  top: 100px;
}

#title {
  position: relative;
  text-align: center;
  color: white;
  font-size: 400%;
}

.background-num {
  position: relative;
  left: 46%;
  top: -14%;
  height: 600px;
  width: 30%;
  color: white;
  display: block;
  background-color: #141414;
  display: inline-block;
}

.background-num p {
  margin-block-start: 0.8em;
  margin-block-end: 0em;
  text-align: end;
  margin-right: 15%;
  font-size: 20em;
}

.content {
  position: relative;
  left: -24%;
  top: 11%;
  height: 600px;
  width: 55%;
  color: white;
  display: block;
  background-color: #1f1f1f;
  white-space: normal;
}

.section-title {
  text-align: center;
  color: #fca311;
  font-size: 160%;
  margin-block-start: 1em;
  margin-block-end: 0.8em;

}

#line{
  height: 2px;
  background-color: #fca311;
}

.section-elements{
  position: relative;
  margin-block-start: 1em;
  margin-block-end: 0.5em;
  color: white;
  max-width: 90%;
  line-height: 25px;
}


#GDD{
  width: 48%;
  padding-bottom: 0px;
}

#TicTacToe{
  width: 55%;
}

#PythonBot{
  width: 62%;
}

#KAU{
  float: none;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  width: 50%;
}

.picture{
  float: right;
  width: 45%;
  margin-right: 3%;
  margin-top: 3%;
  border: none;
  padding-left: 5px;
  padding-bottom: 5px;
}

.picture img{
  width: 100%;  
}

.header{
  font-size: 130%;
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-weight: bold;
}

.description{
  margin-block-start: 0em;
  font-size: 120%;
  margin-block-end: 2%;
}


#slider {
  margin: 0 auto;
  width: 70%;
  max-width: 100%;
}
#slider input[type="radio"] {
  display: none;
}
#slider label {
  cursor: pointer;
  text-decoration: none;
}
#slides {
  padding: 10px;
  position: relative;
  z-index: 1;
  
}
#overflow {
  width: 100%;
  overflow: hidden;
}
#slide1:checked ~ #slides .inner {
  margin-left: 0;
}
#slide2:checked ~ #slides .inner {
  margin-left: -100%;
}
#slide3:checked ~ #slides .inner {
  margin-left: -200%;
}
#slide4:checked ~ #slides .inner {
  margin-left: -300%;
}
#slide5:checked ~ #slides .inner {
  margin-left: -400%;
}
#slide6:checked ~ #slides .inner {
  margin-left: -500%;
}
#slide7:checked ~ #slides .inner {
  margin-left: -600%;
}

#slides .inner {
  
  transition: margin-left 1.5s ease;
  width: 700%;
  line-height: 0;
  height: 300px;
}

#slides .slide {
  width: 14.285%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220%;
  color: #fff;
  background-color: #fca311;
}
#slides .slide_1 {
  /* background: #00171F;
   */
   /* background: #590000; */
    background: #2f3e4688;
}
#slides .slide_2 {
  /* background: #590037; */
  background: #00405985;
}
#slides .slide_3 {
  /* background: #007ea7; */
  background: #31224485;
}
#slides .slide_4 {
  /* background: #00a8e8; */
  background: #5e503f8f;
}
#slides .slide_5 {
  /* background: #00a8e8; */
  background: #85182a8a;
}
#slides .slide_6 {
  /* background: #00a8e8; */
  background: #52795f86;
}
#slides .slide_7 {
  /* background: #00a8e8; */
  background: #fca2118a;
}
#controls {
  margin: -360px 0 0 0;
  width: 100%;
  height: 50px;
  z-index: 3;
  position: relative;
}
#controls label {
  transition: opacity 0.2s ease-out;
  filter: invert(100%);
  display: none;
  width: 50px;
  height: 50px;
  opacity: 0.4;
}
#controls label:hover {
  opacity: 1;
}

#slide1:checked ~ #controls label:nth-child(2),
#slide2:checked ~ #controls label:nth-child(3),
#slide3:checked ~ #controls label:nth-child(4),
#slide4:checked ~ #controls label:nth-child(5),
#slide5:checked ~ #controls label:nth-child(6),
#slide6:checked ~ #controls label:nth-child(7),
#slide7:checked ~ #controls label:nth-child(1) {
  background: url(https://image.flaticon.com/icons/svg/130/130884.svg) no-repeat;
  float: right;
  margin: 0 -50px 0 0;
  display: block;
}

#slide1:checked ~ #controls label:nth-last-child(1),
#slide2:checked ~ #controls label:nth-last-child(7),
#slide3:checked ~ #controls label:nth-last-child(6),
#slide4:checked ~ #controls label:nth-last-child(5),
#slide5:checked ~ #controls label:nth-last-child(4),
#slide6:checked ~ #controls label:nth-last-child(3),
#slide7:checked ~ #controls label:nth-last-child(2) {
  background: url(https://image.flaticon.com/icons/svg/130/130882.svg) no-repeat;
  float: left;
  margin: 0 0 0 -50px;
  display: block;
}

#bullets {
  margin: 320px 0 0;
  position: relative;
  text-align: center;
}
#bullets label {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #ccc;
  margin: 0 10px;
}
#slide1:checked ~ #bullets label:nth-child(1),
#slide2:checked ~ #bullets label:nth-child(2),
#slide3:checked ~ #bullets label:nth-child(3),
#slide4:checked ~ #bullets label:nth-child(4),
#slide5:checked ~ #bullets label:nth-child(5),
#slide6:checked ~ #bullets label:nth-child(6),
#slide7:checked ~ #bullets label:nth-child(7) {
  background: #444;
}


@media (max-width: 1550px) {

.content {
  top: 10%; 
  left: -25%;
  width: 60%;
}

.background-num {
  left: 53%;
  top: -14%;
  
}

#slider {
  margin: 0 auto;
  width: 85%;
  max-width: 100%;
}

}

@media (max-width: 1120px) {
  .content {
  top: 2%; 
  left: -27%;
  float: left;
  width: 80%;
  height: 640px;
}

.background-num {
  left: 66%;
  top: -3%;
  height: 640px;
  width: 35%;
}

.background-num p {
  margin-block-start: 0.8em;
  margin-block-end: 0em;
  text-align: end;
  margin-right: 10%;
  font-size: 20em;
}

#PythonBot{
  width: 58%;
}
}

@media (max-width: 875px) {
 #slider {
  margin: 0 auto;
  width: 86%;
  max-width: 100%;
} 


.content {
  top: 0%; 
  left: 0%;
  width: 98%;
  margin: auto auto;
  height: 99%;
  padding: 0%;
}

.background-num {
  display: none;
}


.header{
  font-size: 110%;
}

.description{
  font-size: 90%;
  margin-block-end: 1%;
  max-width: 95%;
}

.section-title {
  font-size: 140%;
  line-height: 30px;
  margin-block-end: 0.3em;
  margin-block-start: 0.3em;
}


.picture{
  float: none;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  width: 80%;
}

#KAU{
  width: 80%;
}

#GDD{
  width: 80%;
}

#TicTacToe{
  width: inherit;
}

#PythonBot{
  width: inherit;
}

#controls{
  display: none;
}
#bullets{
  display: none;
}


#slides .slide_1 {
  background:  #fca311;
}
#slides .slide_2 {
  background:#fca311;
}
#slides .slide_3 {
   background: #fca311;
}
#slides .slide_4 {
   background: #fca311;
}
#slides .slide_5 {
   background: #fca311;
}
#slides .slide_6 {
  background: #fca311;
}
#slides .slide_7 {
   background: #fca311;
}

#slides .inner {
  width: 100%;
  height: fit-content;
}

#slides .slide {
  width: 100%;
  margin-bottom: 20px;
  border-top: 3px solid #fca311;
  border-bottom: 3px solid #fca311;
}

}
</style>