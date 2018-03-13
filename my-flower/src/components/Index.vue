<template>
  <div div="el">
	  <router-view/>
	  <footer>
	  	<ul id="foot">
	  		<li v-for="(item,index) in list" @click="changeImg(index)">
	  			<router-link active-class="active" :to="item.router" exact>
	  				<img :src="'../../static/' + item.img"/>
	  				<span>{{item.name}}</span>
	  			</router-link>
	  		</li>
	  		<!--<li>
	  			<router-link active-class="active" to="Section2">
	  				<img src="../imgs/foot2.png"/>
	  				<span>分类</span>
	  			</router-link>
	  		</li>
	  		<li>
	  			<router-link active-class="active" to="Section3">
	  				<img src="../imgs/foot3.png"/>
	  				<span>购物车</span>
	  			</router-link>
	  		</li>
	  		<li>
	  			<router-link active-class="active" to="Section4">
	  				<img src="../imgs/foot4.png"/>
	  				<span>我的</span>
	  			</router-link>
	  		</li>-->
	  	</ul>
	  </footer>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    	list:[
    	     {router:"/",img:"foot1.png",name:"首页"},
    	     {router:"Section2",img:"foot2.png",name:"分类"},
    	     {router:"Section3",img:"foot3.png",name:"购物车"},
    	     {router:"Section4",img:"foot4.png",name:"我的"}
    	]
    }
  },
  mounted (){
  	 this.changeImg(0);
  },
  methods: {
  	changeImg(index){
	  		this.list[index].img = "../../static/active" + (index+1) +".png";
  	}
  }
 }
</script>

<style scoped>
/*footer----------------------------------------------------*/
footer{
	height: auto;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;
}
footer ul{
	width: 100%;
	height:.48rem;
	display: flex;
	align-items: center;
}
footer ul li{
	width:25%;
	text-align: center;
}
footer ul li img{
	width:.24rem ;
}
footer ul li a span{
	display: block;
}
footer ul li .active span{
	color: #ff6a00;
}
</style>