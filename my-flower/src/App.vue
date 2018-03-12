<template>
  <div id="app">
  	<header>
	      <img src="../build/logo.png" class="logo"/>
	      <div class="header_right">
		      <a href="#" class="search">
		      	<span></span>白色情人节鲜花
		      </a>
		      <div class="login"><a href="#">登录</a></div>
	      </div>
	  </header>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{margin: 0;padding: 0;}
ul,ol,li{list-style:none;}
img{display:inline-block;border:0;vertical-align: middle;}
input{outline:none;}
i,em{font-style: normal;}
h1,h2,h3,h4,h5,h6,{font-weight: 100;}
header,footer,section,nav{display:block;}
a{text-decoration:none;}
*{box-sizing:border-box;}
html,body{
	height: 100%;
}
html{
	font-size: 26.67vw;
}
body{
    display: flex;
    flex-direction:column;
    font-size: .14rem;
}
/*header-----------------------------------------------------*/
header{
	height: .42rem;
	display: flex;
	align-items: center;
	padding-left:.16rem;
}
header .logo{
	width:.7rem;
	height:.16rem;
}
header .header_right{
	margin-left:.15rem ;
	flex: 1;
}
.header_right .search{
	display: inline-block;
	width: 76%;
	height: .28rem;
	line-height: .28rem;
	background: #f5f5f5;
	border-radius: .05rem;
}
.search span{
	display: inline-block;
    width: .24rem;
    height: .24rem;
    background: url(imgs/icon_Search.png) no-repeat;
    background-size: 100%;
    opacity: 0.5;
    vertical-align: middle;
    margin:0 .02rem ;
}
.header_right .login{
	width: 22%;
	display: inline-block;
	font-size: .12rem;
	text-align: center;
}
.login a{
	color: #494949;
}
.header_right .search{
	font-size: .1rem;
	color: #494949;
}
/*footer----------------------------------------------------*/
footer{
	height:.48rem;
}
</style>
