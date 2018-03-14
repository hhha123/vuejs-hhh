<template>
  <div id="shopcar">
  	<div class="shopcar_top">
  		<p>购物车</p>
  		<a class="icon-arrow-left" @click="back()"></a>
			<span class="icon-menu"></span>
  	</div>
  	<div class="box">
  		<img src="../../static/imgs/empty_cart3.png" alt="" />
  		<p>别让你的心意空空如也</p>
  		<a href="#/">去挑选礼物</a>
  	</div>
  	<div class="shopTitle">
  		<span>为你推荐</span>
  	</div>
    <div class="content">
    	 <ul>
    	 	<li v-for="item in list">
    	 		<a href="">
    	 			<img src="../imgs/220x240.jpg"/>
    	 			<p></p>
    	 			<font></font>
    	 		</a>
    	 	</li>
    	 </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Shopcar',
  data () {
    return {
    	flag: "false",
    	list: []
    }
  },
  methods: {
  	back(){
  		window.history.back();
  	}
  },
  mounted() {
  	  axios.get("http://localhost:3000/proList")
	    .then((res)=>{
	      console.log(res);
	      this.list = res.data;
	    })
  }
}
</script>
<style src="../../css/common.css" ></style>	
<style src="../../css/shopcar.css" scoped></style>
