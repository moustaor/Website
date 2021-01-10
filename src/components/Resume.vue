<template>
  <div class="resume">
    <div id="title">Resume</div>
    <div class="main-box-holder" id="education">
      <h1 class="section-title">Education</h1>
      <div id="line"></div>
      <ul class="section-elements">
        <li id="vip">
          <p class="header">Bachelor of Science in Computer Engineering - 2019-2022 Expected</p>
          <p class="description">University of Manitoba - Winnipeg, Canada</p>
        </li>
        <li>
          <p class="header">Introduction to Artificial Intelligence course - 2020-2021 Expected</p>
          <p class="description">Harvard University	- Online</p>
        </li>
        <li>
          <p class="header">International College of Manitoba graduate - 2017-2019</p>
          <p class="description">International College of Manitoba - Winnipeg, Canada</p>
        </li>
        <li>
          <p class="header">IGCSE Certificate	- 2014-2017</p>
          <p class="description">Global International high school	- Jeddah, Saudi Arabia</p>
        </li>
      </ul>
    </div>
    <div class="main-box-holder" id="skills">
      <h1 class="section-title">Volunteering Experience</h1>
      <div id="line"></div>
      <ul class="section-elements">
        <li>
          <p class="header">Computer Science Gardening project - 2020</p>
          <p class="description">University of Manitoba - Winnipeg, Canada</p>
        </li>
        <li>
          <p class="header">Peer Educator for several ICM courses -	2019</p>
          <p class="description">International College of Manitoba - Winnipeg, Canada</p>
        </li>
        <li>
          <p class="header">School Event Organizer - 2016</p>
          <p class="description">Global international school - Jeddah, Saudi Arabia</p>
        </li>
        <li>
          <p class="header">Volunteer in Assisted Living Facility - 2016</p>
          <p class="description">Nursing Homes, Ministry of Social Affairs - Cairo, Egypt</p>
        </li>
      </ul>
    </div>
    <div class="main-box-holder" id="volunteer">
      <h1 class="section-title">Soft Skills</h1>
      <div id="line"></div>
      
      <ul class="section-elements">
        <li>
          <p class="header">Leadership</p>
        </li>
        <li>
          <p class="header">Teamwork</p>
        </li>
        <li>
          <p class="header">Working under pressure</p>
        </li>
        <li>
          <p class="header">Critical thinking</p>
        </li>
        <li>
          <p class="header">Adaptability</p>
        </li>
        <li>
          <p class="header">Time management</p>
        </li>
        <li>
          <p class="header">Creativity</p>
        </li>
        
      </ul>
    </div>

    <div class="main-box-holder" id="TechSkills">
      <h1 class="section-title">Technical skills</h1>
      <div id="line"></div>
      <ul class="section-elements"  id="bottom">
        <li>
          <p class="header">Please check the detailed list of my technical skills in the following page</p>
          <div class="btn-container"><router-link to="/Experience" class="resume-btn">Skills</router-link></div>
        </li>
      </ul>
    </div>

    <div class="main-box-holder" id="Projects">
      <h1 class="section-title">Projects</h1>
      <div id="line"></div>
      <ul class="section-elements" id="bottom">
        <li>
          <p class="header">Please check the engineering related projects and experience in the following page</p>
          <div class="btn-container"><router-link to="/Projects" class="resume-btn">Projects</router-link></div>
          
        </li>
      </ul>
    </div>
    

    <div id="margin"></div>


  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.resume {
  position: absolute;
  height: 89vh;
  width: 100%;
  margin-top: 100px;
  
}

#title {
  position: relative;
  text-align: center;
  color: white;
  font-size: 400%;
}


.main-box-holder {
  position: absolute;
  padding: 0.1em;
  width: 30%;
  height: 61%;
  background-color: #1f1f1f;
}

#education {
  top: 10%;
  left: 3%;
}

#skills {
  top: 10%;
  left: 35%;
}

#volunteer {
  top: 10%;
  right: 3%;
}

#TechSkills{
  bottom:  3%;
  height: 22%;
  width: 46%;
  left: 3%;
}

#Projects{
  bottom:  3%;
  height: 22%;
  width: 46%;
  right: 3%;
}




.section-title {
  text-align: center;
  color: #fca311;
  font-size: 160%;
  margin-block-start: .3em;
  margin-block-end: .3em;
  animation: Fade 2s ;
}

.section-elements{
  margin-block-start: 1.5em;
  margin-block-end: 0.5em;
  color: white;
  max-width: 90%;
  animation: Fade 4s ;
}

#vip{
  color: #fca311;
}

#line{
  height: 2px;
  background-color: #fca311;
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

.btn-container{
  margin-top:10px;
}

.resume-btn{
  text-decoration: none;
  text-align: center;
  border: 1px solid white;
  border-radius: 10px;
  padding: 1px 10px;
  font-size: 1.6em;
  color: white;
  transition: 0.3s;
  transition-timing-function: ease;
}

/* nav bar buttons animation*/
.btn-container :hover {
  background-color: #fca311;
  border-color: #fca311;
  color: #1f1f1f;
}

#bottom{
  margin-block-start: 0.8em;
}

@keyframes Fade{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@media  (max-width: 1275px){
.main-box-holder {
  position: relative;
  padding: 0.7em;
  margin: 0 auto;
}


#education {
  top: 0%;
  width: 60%;
  left: 0%;
}

#skills {
  top: 5%;
  width: 60%;
  left: 0%;
}

#volunteer {
  top: 10%;
  width: 60%;
  right: 0%;
}

#TechSkills{
  top: 15%;
  bottom:  0%;
  width: 60%;
  left: 0%;
}

#Projects{
  top: 20%;
  bottom:  3%;
  width: 60%;
  right: 0%;
}

#margin{
  position: relative;
  height: 200px;
}

}

@media  (max-width: 960px) and (orientation : portrait){
.section-title{
  font-size: 140%;
}

.header{
  font-size: 100%;
}

.description{
  font-size: 90%;
}

#education {
  height: fit-content;
  width: 70%;
}

#skills {
  height: fit-content;
  width: 70%;
}

#volunteer {
  height: fit-content;
  width: 70%;
}

#TechSkills{
  height: fit-content;
  width: 70%;
}

#Projects{
  height: fit-content;
  width: 70%;
}
}
@media  (max-width: 960px) and (orientation : landscape){
  .section-title{
  font-size: 140%;
}

.header{
  font-size: 100%;
}

.description{
  font-size: 90%;
}

#education {
  height: fit-content;
  width: 70%;
}

#skills {
  height: fit-content;
  width: 70%;
}

#volunteer {
  height: fit-content;
  width: 70%;
}

#TechSkills{
 height: fit-content;
  width: 70%;
}

#Projects{
 height: fit-content;
  width: 70%;
}
}


</style>