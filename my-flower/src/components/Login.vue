<template>
	<div class="contain">
		<div class="login-h">
			<div>
				<img src="../imgs/headChevronLeft.png" alt="" @click="back()">
			</div>
			<p>会员登录</p>
			<div>
				<img src="../imgs/headerIconMore.png" alt="" @click="show()">
			</div>
		</div>
		<Footer v-show="flag" style="border: 1px solid #e2e2e2;"/>
		<div class="phoneYZ">
			<a href="">使用手机验证登录</a>
		</div>
		 <div id="loginContainer">
			<div class="email_autocomplete">
				<input type="text" name="userName" id="username" placeholder="请输入邮箱/手机号码" class="common-input-user" >
			</div>
			<div class="email_autocomplete">
				<input type="password" name="psw" id="PassWord" placeholder="请输入登录密码" class="common-input-user" >
			</div>
			<br>
			<input type="checkbox" name="Remember" id="autologin" checked="checked" class="chboc"><label for="" style="color:#666 ">一个月内免登录</label>
			<input @click="login()" type="button" name="Submit" value="登录" class="btn" id="Submit">
			 <div class="login_am">
			 	<a href=""><span class="zhmm">找回密码</span></a>
			 	<router-link to="/regist"><span class="zhc">快速注册</span></router-link>
			 </div>	
			 <div class="else_box">
			 	<p class="row_line"></p>
			 	<p class="else_way">其他方式登录</p>
			 </div>	
			 <ul class="else_icon">
				<li><img src="../imgs//login_qq.png" alt=""><span>QQ</span></li>
				<li></li>
				<li><img src="../imgs/login_zfb1.png" alt=""><span>支付宝</span></li>
			 </ul>
		</div>
		
	</div>
</template>
<script>
	import axios from 'axios'
	import Footer from './Footer'
	export default{
		name:'Login',
		data () {
			return{
               flag : false
			}
		},
		components:{
			Footer
		},
		methods:{
			login:function(){
				axios.post("/api/login",{
					username:document.getElementById("username").value,
					psw:document.getElementById("PassWord").value	
				})
				.then((res)=>{
					console.log(res);
						if(res.data.status == 1) {
						location.href = "http://localhost:8080/#/";
						
					} else {
						alert(res.data.message);
					}
				})
			},
			back(){
			 window.history.back();
			},
			show(){
				this.flag = !this.flag;
			}
		}
	}

	
</script>
<style src="../css/login.css" scoped>
	
</style>