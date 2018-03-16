<template>
<div class="registCon">
	<div class="regist_h">
		<div>
			<img src="../imgs/headChevronLeft.png" alt="" @click="back()">
		</div>
		<p>注册新用户</p>
		<div>
			<img src="../imgs/headerIconMore.png" alt="" @click="show()">
		</div>
	</div>
	<Footer v-show="flag" style="border: 1px solid #e2e2e2;"/>
	<div class="content">
		<nav class="menu">
		<router-link active-class="graybg" to="/regist/" exact>
			<span id="menu_sms" class="whitebg">手机注册</span>
		</router-link>
		<router-link active-class="graybg" to="/regist/zhuceYx" id="menu_email">
			<span id="menu_sms" class=" whitebg ">邮箱注册</span>
		</router-link>
		</nav>
		
	    <router-view/>
		
		<div class="bottom">
			<a href="">找回密码</a>
		</div>
		
	</div>
	
</div>
</template>
<script>
import Footer from './Footer'
export default{
	name:'Regist',
	data(){
		return {
           flag: false
		}
	},
	methods: {
		back(){
			window.history.back();
		},
		show(){
			this.flag = !this.flag;
		}
	},
	components:{
		Footer
	}
}
</script>
<style src="../css/regist.css" scoped>
	
</style>