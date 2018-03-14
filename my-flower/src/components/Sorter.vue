<template>
	<div id="list">		
		<div class="top">
		  	<a href="http://localhost:8080/#/Section2"><img src="../imgs/iconLeft.png" alt="" /></a>  
		  	<span>鲜花排行</span> 
		  	<img src="../imgs/iconMenu.png" alt="" @click="show(flag)"/>		  	
		</div>	
		<Footer v-show="flag"/>
		<ul>
			<li v-for="item in list" v-lazy="item">
				<span>{{item.p_id}}</span>
				<a href="#/">
					<img :src="item.head_scu" alt="" />
					<div>
						<p>{{item.p_tito}}</p>
						<p>{{item.p_titt}}</p>
						<span>￥{{item.p_prin}}<i>￥{{item.p_prip}}</i></span>
					</div>
				</a>
			</li>
		</ul>
	</div>	
</template>

<script>
import Footer from "./Footer"
import axios from 'axios';
export default {
  name: 'sorter',
  components:{
  	Footer
  },
  data () {
    return {
    	flag:false,
    	list:[]    		
    }
  },
  methods:{  	
  	show(flag){
  		this.flag=!this.flag;
  	}
  },
  mounted(){  	
  	if(this.list.length>0){
  		return;
  	}
  	axios.get("http://localhost:3000/list")
  	.then((res)=>{  	
  		console.log(res.data);
  		this.list=res.data;
  	})
  }	
}
</script>
<style src="../../css/common.css"></style>
<style src="../../css/sorter.css" scoped></style>
