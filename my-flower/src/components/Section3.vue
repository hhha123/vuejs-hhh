<template>
  <div id="shopcar">
  	<div class="shopcar_top">
  		<p>购物车</p>
  		<a class="icon-arrow-left" @click="back()"></a>
			<span class="icon-menu" @click="showFoot()"></span>
  	</div>
  	<Footer v-show="flag"/>
  	<Shopcar/>
    <div class="content">
    	 <ul>
    	 	<li v-for="item in list">
    	 		<a href="#/page">
    	 			<img :src="item.img"/>
    	 			<p>{{item.name}}</p>
    	 			<font class="price">{{item.price}}</font>
    	 		</a>
    	 	</li>
    	 </ul>
    </div>
    <div class="end">
    	<span>合计:<em class="total">0</em></span>
    	<button id="jieSuan">去结算<em class="total-num">0</em></button>
    </div>
  </div>
</template>

<script>
import Shopcar from './Shopcar';	
import axios from 'axios';
import Footer from './Footer';
export default {
  name: 'Section3',
  components: {
  	Shopcar,
  	Footer
  },
  data () {
    return {
    	flag: false,
    	list: []
    }
  },
  methods: {
  	back(){
  		window.history.back();
  	},
  	showFoot(){
    		this.flag = !this.flag;
    	}
  },
  mounted() {
	  	if(this.list.length > 0){
	  		return;
	  	}
  	  axios.get("http://localhost:3000/proList")
	    .then((res)=>{
	      console.log(res);
	      this.list = res.data;
	    })
  }
}
</script>
<style src="../../css/common.css" ></style>	
<style src="../../css/Section3_1.css" scoped></style>
