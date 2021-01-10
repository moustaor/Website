<template>
  <div class="navbar">
    <nav>
      <input id="nav-toggle" type="checkbox" />
      <div class="logo"><router-link to="/" active-class="active" exact class="btn"><img src="../assets/logo.png" alt="Logo"></router-link></div>
      <ul class="links">
        <li><router-link to="/" active-class="active" exact class="btn">Home</router-link></li>
        <li><router-link to="/Resume" active-class="active" exact class="btn">Resume</router-link></li>
        <li><router-link to="/Experience" active-class="active" exact class="btn">Skills</router-link></li>
        <li><router-link to="/Projects" active-class="active" exact class="btn">Projects</router-link> </li>
        <li><router-link to="/ContactMe" active-class="active" exact class="btn">Contact Me</router-link></li>
      </ul>
      <label for="nav-toggle" class="icon-burger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
    </nav>
  </div>
</template>


<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>


<style scoped>
body {
	padding: 0;
	margin: 0;
}

nav {
	position: fixed;
	z-index: 10;
	left: 0;
	right: 0;
	top: 0;
	padding: 0 5%;
	height: 100px;
	background-color: black;
}
nav .logo {
	float: left;
	width: 30%;
	height: 100%;
	display: flex;
	align-items: center;
}
nav .logo img{
  width: 100px;
  transition: 0.2s;
  transition-timing-function: linear;
}
nav .logo img:hover{
	width: 110px;
	filter: drop-shadow(0px 0px 10px #fca211d2);
}
nav .links {
	float: right;
	padding: 0;
	margin: 0;
	height: 100%;
	display: flex;
	align-items: center;
}
nav .links li {
	list-style: none;
}
.btn {
  text-decoration: none;
  padding: 0.6em;
  font-size: 1.6em;
  color: white;
  transition: 0.3s;
  transition-timing-function: ease;
}
.active{
  text-decoration: none;
  color: #fca311;
  font-size: 2em;
}
nav .links li :hover {
  color: #fca311;
}
#nav-toggle {
	position: absolute;
	top: -100px;
}
nav .icon-burger {
	display: none;
	position: absolute;
	right: 5%;
	top: 50%;
	transform: translateY(-50%);
}
nav .icon-burger .line {
	width: 30px;
	height: 5px;
	background-color: #fff;
	margin: 5px;
	border-radius: 3px;
	transition: all .3s ease-in-out;
}
@media screen and (max-width: 1300px) {
	nav .logo {
		float: none;
		width: auto;
		justify-content: center;
	}
	nav .links {
		float: none;
		position: fixed;
		z-index: 9;
		left: 0;
		right: 0;
		top: 100px;
		bottom: 100%;
		width: auto;
		height: auto;
		flex-direction: column;
		justify-content: space-evenly;
		background-color: rgba(0,0,0,.8);
		overflow: hidden;
		box-sizing: border-box;
		transition: all .5s ease-in-out;
	}
	nav .links a {
		font-size: 20px;
	}
	nav :checked ~ .links {
		bottom: 0;
	}
	nav .icon-burger {
		display: block;
	}
	nav :checked ~ .icon-burger .line:nth-child(1) {
		transform: translateY(10px) rotate(225deg);
	}
	nav :checked ~ .icon-burger .line:nth-child(3) {
		transform: translateY(-10px) rotate(-225deg);
	}
	nav :checked ~ .icon-burger .line:nth-child(2) {
		opacity: 0;
	}
	
}

.youtube-link {
	position: fixed;
	left: 20px;
	bottom: 20px;
	color: #000;
	text-decoration: none;
	font-size: 12px;
}
</style>
