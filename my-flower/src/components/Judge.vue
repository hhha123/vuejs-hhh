<template>
	<div id="judge">		
		<div class="top">
		  	<a href="http://localhost:8080/#/Section2"><img src="../../static/imgs/headChevronLeft.png" alt="" /></a>  
		  	<span>客户评价</span> 
		  	<img src="../../static/imgs/headerIconMore.png" alt="" @click="show(flag)"/>		  	
		</div>	
		<Footer v-show="flag"/>
		<p class="total">最近已有<span>569</span>人评价</p>		
		<ul>
			<li >	
				<a v-for="item in list" v-lazy="item">
					<img :src="item.head_scu" alt="" />
					<div>
						<p>{{item.code[0].code}}<b>★★★★★</b></p>
						<p>{{item.content[0].content}}<i>2018-03-15</i></p>
						<span>￥{{item.addr[0].addr}}</span>
					</div>
				</a>								
			</li>			
			<div class="bot" @click="add()">
				加载更多
				<span></span>
			</div>
		</ul>				
		<div class="foo">
			<a href="">
				<img src="//img01.hua.com/uploadpic/newpic/9010966.jpg_80x87.jpg" alt="" />
				<div>
					<p>一往情深</p>
					<p>￥245</p>					
				</div>
			</a>
			<a href="" class="shop">
				加入购物车
			</a>
		</div>
	</div>	
</template>

<script>
import Footer from "./Footer"
import axios from 'axios';
export default {
  name: 'judge',
  components:{
  	Footer
  },
  data () {
    return {
    	flag:false,
    	list:[],   
    	fal:false
    }
  },
  methods:{  	
  	show(flag){
  		this.flag=!this.flag;
  	},
  	add(){
  		this.fal = !this.fal;
  	}
  },
  mounted(){ 
  	if(this.fal){
  		this.fal=false;
  		this.list.push(this.list);
  	}
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
<style src="../../css/judge.css" scoped></style>
