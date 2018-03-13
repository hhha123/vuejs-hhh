<template>
	<footer>
	  	<ul id="foot">
	  		<li v-for="(item,index) in list">
	  			<router-link active-class="active" :to="item.router" exact>
	  				<img :src="'../../static/' + item.img"/>
	  				<span>{{item.name}}</span>
	  			</router-link>
	  		</li>
	  	</ul>
	  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    	list:[
    	     {router:"/",img:"foot1.png",name:"首页"},
    	     {router:"Section2",img:"foot2.png",name:"分类"},
    	     {router:"Section3",img:"foot3.png",name:"购物车"},
    	     {router:"Section4",img:"foot4.png",name:"我的"}
    	]
    }
  }
 }
</script>

<style scoped="scoped">
img{display:inline-block;border:0;vertical-align: middle;}
footer{
	height: auto;
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