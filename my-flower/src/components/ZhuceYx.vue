<template>
	<div class="login-mc" style="display: block;">
			<div style="position: relative;">
				<input type="tel" class="common-input-user" name="imgVerificationCode" placeholder="请输入验证码">
				<span style="position:absolute;top:0.07rem;right:0px;width:.7rem;padding:0px 0.07rem;border-left:1px solid #e2e2e2">1234</span>
			</div>
			<div>
				<input type="text" name="Email" class="common-input-user" id="Email" placeholder="请输入邮箱">
			</div>
			<div class="pswCon">
				<span class="switchbtn off"></span>
				<input type="password" name="PassWord" class='setPsw2' id="psw" placeholder="请设置6-20位字母和数字登录密码">
			</div>
			<div style="clear: both;"></div>
			<div style="margin:.25rem 0.06rem;">
				<input type="button" class="sub_btn" value="注册">
			</div>

	</div>
</template>
<script >
	export default{
		name:'ZhuuceYx'
	}
	
</script>
<style src="../css/regist.css">
	
</style>