<template>
  
  <div class="main-skills" >
    
    <div id="title">Skills</div>

    <div class="main-box-holder" id="languages">
      <h1 class="section-title">languages</h1>
      <div class="content">
        <div class="skills">
          <div class="skill">
            <div class="skill-name">HTML/CSS</div>
            <div class="skill-bar">
              <div class="skill-per" per="80"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Javascript</div>
            <div class="skill-bar">
              <div class="skill-per" per="60"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Java</div>
            <div class="skill-bar">
              <div class="skill-per" per="95"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">C#</div>
            <div class="skill-bar">
              <div class="skill-per" per="90"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">C</div>
            <div class="skill-bar">
              <div class="skill-per" per="85"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Python</div>
            <div class="skill-bar">
              <div class="skill-per" per="95"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Assembly</div>
            <div class="skill-bar">
              <div class="skill-per" per="80"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">SQL</div>
            <div class="skill-bar">
              <div class="skill-per" per="85"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Mongo DB</div>
            <div class="skill-bar">
              <div class="skill-per" per="40"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">PHP</div>
            <div class="skill-bar">
              <div class="skill-per" per="30"></div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="main-box-holder" id="programs">
      <h1 class="section-title">programs</h1>
      <div class="content">
        <div class="content">
        <div class="skills">
          <div class="skill">
            <div class="skill-name">Microsoft Office</div>
            <div class="skill-bar">
              <div class="skill-per" per="90"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Unity game engine</div>
            <div class="skill-bar">
              <div class="skill-per" per="90"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Android Studio</div>
            <div class="skill-bar">
              <div class="skill-per" per="85"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Mplabx</div>
            <div class="skill-bar">
              <div class="skill-per" per="80"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Keil uvision</div>
            <div class="skill-bar">
              <div class="skill-per" per="70"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Neo4J</div>
            <div class="skill-bar">
              <div class="skill-per" per="75"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Photoshop</div>
            <div class="skill-bar">
              <div class="skill-per" per="80"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Maya</div>
            <div class="skill-bar">
              <div class="skill-per" per="70"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Blender</div>
            <div class="skill-bar">
              <div class="skill-per" per="40"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">3DS Max</div>
            <div class="skill-bar">
              <div class="skill-per" per="50"></div>
            </div>
          </div>

          

        </div>
      </div>
      </div>
    </div>

    <div class="main-box-holder" id="hardware">
      <h1 class="section-title">hardware</h1>
      <div class="content">
        <div class="skills">

          <div class="skill">
            <div class="skill-name">[general] electronics</div>
            <div class="skill-bar">
              <div class="skill-per" per="70"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Arm tm4c1294</div>
            <div class="skill-bar">
              <div class="skill-per" per="90"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">mx7ck pic32</div>
            <div class="skill-bar">
              <div class="skill-per" per="80"></div>
            </div>
          </div>

          
          <div class="skill">
            <div class="skill-name">Arduino</div>
            <div class="skill-bar">
              <div class="skill-per" per="70"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-name">Arm de10</div>
            <div class="skill-bar">
              <div class="skill-per" per="75"></div>
            </div>
          </div>

          

        </div>
      </div>
    </div>

    <div id="margin"></div>
 
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
  <script type="application/javascript">
      $('.skill-per').each(function(){
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width",per+'%');
        $({animatedValue: 0}).animate({animatedValue: per},{
          duration: 3000,
          step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          },
          complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          }
        });
      });</script>
    
      
  </div>
</template>

<script>
export default {


  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    );
    document.head.appendChild(externalScript);
    },
    
};
</script>





<style scoped>
  .main-skills {
    position: absolute;
    width: 100%;
    height: 89vh;  
    margin-top: 100px;
  }

  #title{
    position: relative;
    text-align: center;
    color: white;
    font-size: 400%;
  }

  .main-box-holder {
    position: absolute;
    width: 23%;
    height: 705px;
    border-left: 80px solid #fdb035ef;
    padding: 10px;
    background-color: #1f1f1fb6;
    display: inline-block;
  }

  .main-box-holder h1 {
    position: absolute;
    text-align: center;
    font-size: 3em;
    color: #1f1f1f;
    letter-spacing: 10px;
    margin-block-start: 0em;
    left: 0;
    text-transform: uppercase;
    margin-left: -60px;
    transform: rotate(270deg);
    transform-origin: 0 0;
  }

  
  #languages h1 {
    bottom: 123px;
  }

  #programs h1 {
    bottom: 133px;
  }

  #hardware h1 {
    bottom: 133px;
  }

  #languages {
    left: 3%;
  }

  #programs {
    left: 35%;
  }

  #hardware{
    right: 5%;
  }

  .skills{
    width: 90%;
    padding: 0 20px;
    
  }

  .skill-name{
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    margin: 20px 0;
    margin-block-end: 0.2em;
  }

  .skill-bar{
    height: 18px;
    border:2px solid #fca311;
    border-radius: 10px;
  }

  .skill-per{
    height: 20px;
    background-color: #fca311;
    border-radius: 10px;
    width: 0;
    transition: 3s ease;
    position: relative;
  }

  .skill-per::before{
    content: attr(per);
    position: absolute;
    padding: 4px 6px;
    background-color: #000;
    color:white;
    font-size: 17px;
    border-radius: 4px;
    top: -42px;
    right: 0;
    transform: translateX(50%);
  }

  .skill-per::after{
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #000;
    top: -16px;
    right: 0;
    transform: translateX(50%) rotate(45deg);
    border-radius: 2px;
  }

@media  (max-width: 1260px){

  .main-box-holder {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 45%;
  }

  #languages {
    left: 0%;
  }

  #programs {
    top: 7%;
    right: 0%;
  }

  #hardware{
    top: 15%;
  }

  #margin{
  position: relative;
  height: 160px;
 }

 
}

@media  (max-width: 960px) and (orientation : portrait){
  .main-box-holder {  
    width: 65%;
    height: fit-content;
    padding-bottom: 45px;
    border-left: 50px solid #fdb035ef;
  }

  .main-box-holder h1 {
    font-size: 2em;
    letter-spacing: 15px;
    margin-left: -45px;
    
  }

  #languages h1 {
    bottom: 0px;
  }

  #programs h1 {
    bottom: 0px;
  }

  #programs {
    left: 0%;
  }

  #hardware h1 {
    bottom: 0px;
  }

  #hardware {
    right: 0%;
  }
}

@media  (max-width: 960px) and (orientation : landscape){
  .main-box-holder {  
    width: 65%;
    height: fit-content;
    border-left: 50px solid #fdb035ef;
  }

  .main-box-holder h1 {
    font-size: 2em;
    letter-spacing: 15px;
    margin-left: -45px;
    
  }

  #languages h1 {
    bottom: 0px;
  }

  #programs h1 {
    bottom: 0px;
  }

  #hardware h1 {
    bottom: 0px;
  }
}
</style>