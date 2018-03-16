<template>
<div class="login-mc" style="display:block;">
			<div>
				<input type="tel" class="common-input-user" id="user" placeholder="请输入手机号">
			</div>
			<div style="display:block;position:relative">
			<input type="tel" name="imgCode" class="common-input-user" id="passWord" placeholder="请输入验证码" >
			<span>1234</span>
				
			</div>
			<div>
				<input type="text" placeholder="请输入短信验证码" class="common-input-user" id="getcode" style="float:left;width:50%;">
				<a href="" class="btnA">
					<b id='prompt_info'>获取短信验证码</b>
				</a>
			</div>
			<span style="display: block;clear: both;"></span>
			<div style="margin:.25rem 0px .15rem 0px;">
				<input @click="regist()" type="button" id="btnNext" class="sub_btn" value="下一步">
			</div>
			
</div>
	
</template>
<script>
import axios from 'axios'
export default{
	name:'ZhucePhone',
	methods:{
		regist:function(){
		axios.post("/api/regist",{
				username:document.getElementById("user").value,
				psw:document.getElementById("passWord").value
			})
			.then((res)=>{
				console.log(res);
				if(res.data.status == 1) {
					location.href ="http://localhost:8080/#/login";
				} else {
					alert(res.data.message);
				}
			})
		}
	}
}

	
</script>
<style src='../css/regist.css' scoped>
	
</style>