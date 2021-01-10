<template>
  <div id="app">
    
    
    
    

    <div class="particles">
      <vue-particles
          class="vueparticles"
          color="#fca311"
          :particleOpacity="0.7"
          linesColor="#fca285"
          :particlesNumber="100"
          shapeType="circle"
          :particleSize="5"
          :linesWidth="2"
          :lineLinked="true"
          :lineOpacity="0.2"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="false"
          hoverMode="grab"
          :clickEffect="false"
          clickMode="push"
        >
        </vue-particles>
    </div>

    <NavBar msg="Welcome to Your Vue.js App"/>
    
    <router-view></router-view>
    

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    // mounted() {
    // let externalScript = document.createElement("script");
    // externalScript.setAttribute(
    //   "src",
    //   "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    // );
    // document.head.appendChild(externalScript);
    // }
  },
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    );
    document.head.appendChild(externalScript);
    },
}
</script>

<style>
@font-face {
  font-family: Teko;
  src: url(./fonts/Teko/Teko-Light.ttf); 
  font-weight: lighter;
}

@font-face {
  font-family: Teko;
  src: url(./fonts/Teko/Teko-Medium.ttf); 
  font-weight: bold;
}

#app {
  position: static;
  font-weight: lighter;
  font-family: Teko;
  height: 100vh;
  word-spacing: 5px;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: grey;
}

body{
  margin: 0%;
  background-color: black;
  height: 100vh;
}

.particles{
  position: fixed;
  height: 100%; 
  width: 100%;
}

.vueparticles{
  height: 100%;
}


</style>
   