<template>
  <div id="shopcar">
  	<div class="shopcar_top">
  		<p>购物车</p>
  		<a class="icon-arrow-left" @click="back()"></a>
			<span class="icon-menu"></span>
  	</div>
  	<Shopcar/>
    <div class="content">
    	 <ul>
    	 	<li v-for="item in list">
    	 		<a href="#">
    	 			<img :src="item.img"/>
    	 			<p>{{item.name}}</p>
    	 			<font class="price">{{item.price}}</font>
    	 		</a>
    	 	</li>
    	 </ul>
    </div>
  </div>
</template>

<script>
import Shopcar from './Shopcar';	
import axios from 'axios';
export default {
  name: 'Section3',
  components: {
  	Shopcar
  },
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
