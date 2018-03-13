<template>
	<div class="main">
		<header>
	      <img src="../imgs/logo.png" class="logo"/>
	      <div class="header_right">
		      <a href="#" class="search">
		      	<span></span>白色情人节鲜花
		      </a>
		      <div class="login"><a href="#">登录</a></div>
	      </div>
	    </header>
	    <section>
			<!--<mt-swipe :auto="4000">
			  <mt-swipe-item><a href="#"><img src="../imgs/slide1.jpg"/></a></mt-swipe-item>
			  <mt-swipe-item><a href="#"><img src="../imgs/slide2.jpg"/></a></mt-swipe-item>
			  <mt-swipe-item><a href="#/sort"><img src="../imgs/slide3.jpg"/></a></mt-swipe-item>
			</mt-swipe>-->
			<swiper/>
			<div class="nav">
				<ul>
					<li>认证龙头企业</li>
					<li>13年品牌</li>
					<li>3小时送花</li>
					<li>最近<a href="javascript:;">242927</a>条好评</li>
				</ul>
			</div>
			<div class="pro_cate">
				<a href="javascript:;" class="proHua">
					<img src="../imgs/hua1.png" />
					<span>鲜花</span>
				</a>
				<a href="javascript:;" class="proHua">
					<img src="../imgs/hua2.png" />
					<span>永生花</span>
				</a>
				<a href="javascript:;" class="proHua">
					<img src="../imgs/hua3.png" />
					<span>蛋糕</span>
				</a>
				<a href="javascript:;" class="proHua">
					<img src="../imgs/hua4.png" />
					<span>礼品</span>
				</a>
				<a href="javascript:;" class="proHua">
					<img src="../imgs/hua5.png" />
					<span>巧克力</span>
				</a>
			</div>
			<div class="flower_cate pro_cate">
				<a href="javascript:;" class="proHua">
					<img src="../imgs/hua_01.png" />
					<span>爱情鲜花</span>
				</a>
				<a href="javascript:;" class="proHua">
					<img src="../imgs/hua_02.png" />
					<span>友情鲜花</span>
				</a>
				<a href="javascript:;" class="proHua">
					<img src="../imgs/hua_03.png" />
					<span>送长辈鲜花</span>
				</a>
				<a href="javascript:;" class="proHua">
					<img src="../imgs/hua_04.png" />
					<span>商务鲜花</span>
				</a>
			</div>
		<div class="modular">
	    	<div class="title">
	    		<div class="title-line"></div>
	    		<p class="title-name">鲜花精选</p>
	    	</div>
	    	<article class="pro_list">
	    		<ul>
	    			<li v-for="item in data">
	    				<div class="pro_item" v-lazy="item">
	    					<a href="javascript:;">
	    						<img :src="'../../static/' + item.imgUrl" />
	    						<div class="pro_infor">
	    							<p class="name">{{item.name}}</p>
	    							<p class="detail">{{item.detail}}</p>
	    							<p class="price">{{item.price}}</p>
	    						</div>
	    					</a>
	    				</div>
	    			</li>
	    		</ul>
	    	</article>
	    	<p class="more">
	    		<a href="javascript:;" class="icon-more">全部鲜花</a>
	    	</p>
	    </div>
	    <div class="modular">
	    	<div class="title">
	    		<div class="title-line"></div>
	    		<p class="title-name">水果精选</p>
	    	</div>
	    	<article class="pro_list">
	    		<ul>
	    			<li v-for="item in list">
	    				<div class="pro_item" v-lazy="item">
	    					<a href="javascript:;">
	    						<img :src="item.image_url"/>
	    						<div class="pro_infor">
	    							<p class="name">{{item.short_name}}</p>
	    							<p class="detail">{{item.goods_name}}</p>
	    							<p class="price">{{item.normal_price}}</p>
	    						</div>
	    					</a>
	    				</div>
	    			</li>
	    		</ul>
	    	</article>
	    	<p class="more">
	    		<a href="javascript:;" class="icon-more">全部水果</a>
	    	</p>
	    </div>
	    <div class="modular">
	    	 <img src="../imgs/m-brand.png" style="width: 100%;"/>
	    </div>
	    <div class="end">
	    	  <ul class="end_nav">
	            <li><a href="javascript:;">花语大全</a></li>
	            <li><a href="javascript:;">查单</a></li>
	            <li><a href="javascript:;">关于我们</a></li>
	        </ul>
	        <ul class="entrance">
	            <li>
	            	<a href="javascript:;">
	            	  <span class="icon-phone"></span>
	            	</a>
	            </li>
	            <li>
	            	<a href="javascript:;" target="_blank" class="kehu">
	            		<span class="icon-kefu"></span>
	            	</a>
	            </li>
	        </ul>
	        <p class="copyright">Copyright © 2005~2018 花礼网(中国鲜花礼品网) 版权所有<br>中国鲜花网领先品牌，鲜花速递专家！</p>
	    </div>
	  </section>
	</div>
</template>

<script>
import swiper from './swiper';
import axios from 'axios';

export default {
  name: 'Section1',
  data () {
    return {
    	list: [],
    	data:[
    	    {"imgUrl":"flower1.jpg",name:"鲜花/忘情巴黎",detail:"33枝红玫瑰",price:"139"},
    	    {"imgUrl":"flower2.jpg",name:"鲜花/阳光海岸",detail:"19枝香槟玫瑰",price:"239"},
    	    {"imgUrl":"flower3.jpg",name:"鲜花/不变的承诺",detail:"99枝红玫瑰",price:"789"},
    	    {"imgUrl":"flower4.jpg",name:"鲜花/真爱如初",detail:"雪山玫瑰11枝、深紫色勿忘我0.3扎",price:"199"},
    	    {"imgUrl":"flower5.jpg",name:"鲜花/一往情深",detail:"精品玫瑰礼盒:19枝红玫瑰，勿忘我适量",price:"228"},
    	    {"imgUrl":"flower6.jpg",name:"鲜花/爱的诺言",detail:"红玫瑰19枝，白色腊梅2枝",price:"679"}
    	]
    }
  },
  mounted (){
  	if(this.list.length > 0){
  		return;
  	}
  	axios.get("/subject/502/sorted_goods?sort_type=PRIORITY&page=1&size=50")
    .then((res)=>{
      console.log(res);
      this.list = res.data.goods_list.splice(0,8);
    })
  },
  components: {
  	swiper
  }
 }
</script>

<style src="../css/Section1.css" scoped="scoped">
</style>
