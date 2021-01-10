<template>

  <div class="mainpage">
  <!-- Main section of the page -->
    <!-- <div class="main"> -->

      <div class="my-picture">
        <img src="../assets/picture.png" alt="My Picture">
      </div> 


      <!-- Text written in the left side -->
      <div class="quote">
        <h1>Omar Moustafa</h1>
        <p id="Eng"> Computer Engineer</p>
        <p> I love to code because if I can think it, I can make it a reality.  I am a geek. I love computers. 
            I love everything about them. I spend eight to ten hours a day in front of a computer screen as I am coding,
            debugging, or discussing coding practices and methods with other programmers. I find joy in turning complex 
            problems into simple, beautiful and intuitive designs. When I'm not coding, tweeting or pushing pixels, you'll 
            find me travelling, working out or flexing my engineering degree to my none engineering friends. </p>
      </div>

      <div id="margin"></div>

      


    <!-- </div> -->

    

  </div>
</template>



<script>
export default {
  name: "MainPage",
  props: {
    msg: String,
  },
};
</script>





<style scoped>

/* main section big box */
.mainpage{
  position: absolute; 
  top: 100px;
  bottom: 0;
  width: 100%;
  color: white;
}


.quote{
  display: inline-block;
  z-index: 1;
  position: relative;
  width: 92%;
  margin-left: 4%;
  top: 20%;
  background-color: #1f1f1f;
  margin-right: 2%;
  color: white;
}

/* header of the text box */
h1 {
  color: #fca311;
  font-size: 300%;
  margin-block-end: 0em;
  margin-block-start: 0.3em;
  margin-left: 20px;
  animation: Fade 2s ;
}

/* text of the text box */
p {
  font-size: 180%; 
  line-height: 1.5;  
  max-width: 55%;
  margin-block-start: 0em;
  margin-left: 20px;
  word-spacing: 0px;
  letter-spacing: 2px;
  animation: Fade 5s ;
}

@keyframes Fade{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}


#Eng{
  line-height: 0.3;
  margin-block-end: 1.5em;
}



img{
  z-index: 2;
  position: absolute;
  right: 4%;
  height: 100%;
  bottom: 0px;
  filter: drop-shadow(0px 0px 80px #b6750d98); 
}



@media (max-width: 1300px){


.mainpage{
  height: inherit;
}


.my-picture{
  width: 270px;
  height: 470px;
  margin: 0 auto;
}

img{
  position: relative;
  left: -45px;
  height: inherit;
  bottom: 0px; 
}



.quote{
  left: 0%;
  width: 70%;
  margin: 0 auto;
  display: block;
  position: relative;
  top: -10px;
  text-align: center;
  padding: 1em;
  z-index: 3;
}



/* header of the text box */
 h1 {
  color: #fca311;
  font-size: 250%;
  margin-block-end: 0em;
}

/* text of the text box */
p {
  font-size: 150%; 
  line-height: 1.5;  
  max-width: 100%;
  margin-block-start: 0em;
}

#margin{
  height: 25px;
}



}

@media  (max-width: 960px){
/* header of the text box */
 h1 {
  color: #fca311;
  font-size: 200%;
  margin-block-end: 0em;
}

/* text of the text box */
p {
  font-size: 110%; 
  line-height: 1.5;  
  max-width: 100%;
  margin-block-start: 0em;
}



}


</style>
