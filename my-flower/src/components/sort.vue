<template>
	<div id="sort">
		<header>
			<p>白色情人节</p>
			<a href="#/" class="icon-arrow-left"></a>
			<span class="icon-menu" @click="showFoot()"></span>
		</header>
		<Footer v-show="flag"/>
		<section>
			<div class="banner">
				<img src="../../static/m-banner.jpg"/>
			</div>
			<div class="product" v-for="item in list">
				<div class="proTitle">
					<div class="product-title-name">
	                    <p>{{item.title}}</p>
	                    <div class="product-title-line"></div>
	                </div>
	                <p class="product-title-desc"><span>{{item.text}}</span></p>
				</div>
				<div class="proList">
				    <div class="pro-item full" v-lazy="item">
				    	<a href="#/">
				    		<div class="pro-pic">
				    			<img :src="item.img"/>
				    		</div>
				    		<div class="pro-infor">
				    			<p class="product-info-desc">{{item.name}}</p>
				    			<div class="product-info-line"></div>
				    			<p class="product-info-name">{{item.detail}}</p>
				    			<p class="product-info-price"><span>{{item.price}}</span></p>
				    		</div>
				    	</a>
				    </div>
				     <div class="pro-item" v-for="data in item.list">
				    	<a href="#/">
				    		<div class="pro-pic">
				    			<img :src="data.imgc"/>
				    			<div class="product-tag"><span>畅销款特惠</span></div>
				    		</div>
				    		<div class="pro-infor">
				    			<p class="product-info-desc">{{data.namec}}</p>
				    			<div class="product-info-line"></div>
				    			<p class="product-info-name">{{data.detail}}</p>
				    			<p class="product-info-price"><span>{{data.price}}</span></p>
				    		</div>
				    	</a>
				    </div>
				</div>
			</div>
		     <div class="end">
	    	  <ul class="end_nav">
	            <li><a href="javascript:;">帮助</a></li>
	            <li><a href="javascript:;">查单</a></li>
	            <li><a href="javascript:;">花语大全</a></li>
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
	        <p class="copyright">Copyright © 2005~2018 花礼网(中国鲜花礼品网) 版权所有</p>
	    </div>
		</section>
	</div>
</template>
<script>
import axios from 'axios';
import Footer from './Footer';

export default{
	 name: 'sort',
	 components: {
  	     Footer
    },
    data () {
    	return {
    		list:[],
    		flag: false
    	}
    },
    methods: {
    	showFoot(){
    		this.flag = !this.flag;
    	}
    },
    mounted(){
    	axios.get("http://localhost:3000/product")
	    .then((res)=>{
	      console.log(res);
	      this.list = res.data;
	    })
    }
}
</script>

<style scoped="scoped" src="../css/sort.css">
</style> 