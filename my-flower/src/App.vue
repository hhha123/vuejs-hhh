<template>
  <div id="app">
    <router-view/>
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
a{text-decoration:none;color: #494949;}
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
    font-size: .12rem;
}
</style>
