<template>
  <div div="el">
	  <router-view/>
	  <footer>
	  	<ul>
	  		<li v-for="(item,index) in list" @click="changeImg(index)">
	  			<router-link active-class="active" :to="item.router" exact>
	  				<img class="foot" :src="'../../static/' + item.img"/>
	  				<span>{{item.name}}</span>
	  			</router-link>
	  		</li>
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
  mounted(){
  	this.changeImg(0);
  },
  methods: {
		changeImg(index){
			    var Imglist = document.querySelectorAll(".foot");
			    var len = Imglist.length;
			    for(var i = 0; i < len; i++){
			    	this.list[i].img = "foot" + (i+1) +".png";
			    }
		  		this.list[index].img = "active" + (index+1) +".png";
		}
  }
}
</script>

<style scoped>
img{display:inline-block;border:0;vertical-align: middle;}
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