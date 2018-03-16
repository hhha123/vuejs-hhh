<template>
	<div id="pageContain">
		<div class="header-p">
			<div class="header_box">
				<a href="#/" class="goback"><img src="../imgs/headChevronLeft.png" alt="" /></a>
				<a href="#/" class="gohome"><img src="../imgs/backhome.png" alt="" /></a>
			</div>
			
		</div>
		
		<mt-swipe :auto="0">
		  <mt-swipe-item><img src="../imgs/9010011.jpg" alt="" /></mt-swipe-item>
		  <mt-swipe-item><img src="../imgs/201709151725388540.jpg" alt="" /></mt-swipe-item>
		  <mt-swipe-item><img src="../imgs/201709011117442888.jpg" alt="" /></mt-swipe-item>
		  <mt-swipe-item><img src="../imgs/201709151725463208.jpg" alt="" /></mt-swipe-item>
		</mt-swipe>
		<div class="section_box">
		<div class="main_pro_text">
			<div class="info_box">
				<div class="collect_box">
	                <a href="javascript:DoGuanZhu(9010011,1);" id="GuanZhu">
	                    <img src="../imgs/icon_collect.png" alt="">
	                </a>
           		 </div>
			<p class="info_title">一心一意 - 玫瑰11枝，粉色勿忘我0.3扎
			<span class="cuxiao_tip">畅销款特惠</span></p>
			<div class="price_part">
                <span class="now_price" id="nowPirce">￥139</span>
                <del class="before_price" id="beforePrice">￥178</del>
                <span class="vip_price" id="vipPrice" style="display:none;">VIP价</span>
                <span class="discount_price" id="jrDiscount" style="">7.8折</span>
                <span class="discount_price" id="zuanxiang" style="display:none;">微信专享</span>
            </div>
				
			</div>
		</div>
		<div class="info_huayu_box" style="padding-top:12px;">
            <span style="float:left">花语</span>
            <p class="info_huayu">11枝玫瑰，寓意一心一意！<br>有情之人，天天是节。一句寒暖，一线相喧；一句叮咛，一笺相传；一份相思，一心相盼；一份爱意，一生相恋。</p>
        </div>
        <div class="info_huayu_box">
            <span style="float:left">材料</span>

            <p class="info_huayu cailiao">红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶适量搭配 内层白色雾面纸，外层牛皮纸,咖啡色花结</p>
        </div>
        <div class="info_huayu_box">
            <span style="float:left" class="info_huayu_tip">配送</span>
                <div class="info_huayu deliver_country_box">
全国
                </div>
        </div>
        <div class="info_huayu_box">
            <span  style="float:left" class="info_huayu_tip">附送</span>
            <p class="info_huayu">下单填写留言，即免费赠送精美贺卡！</p>
        </div>
        <div class="info_huayu_box">
            <span style="float:left">说明</span>
            <p class="info_huayu">畅销款特惠</p>
        </div>
       <div class="deliver_date_area">
        <div class="time_date_box">
            <div class="open_app_box">
                <div class="open_app_arrow">
                    <p class="oppen_app" id="downApp" style="" onclick="GotoApp();">App下单再减3元，立即打开</p>
                </div>
            </div>
        </div>
    </div> 
    <div class="advice">
    	<p class="advice_title">订单评价<a href="/comments/9010011.html" class="advice_arrow">3995条评价</a>	
    	</p>
    	<div class="advice_list">
    		<ul>
    			<li>
    				<img  class="head_img"src="../imgs/9010011.jpg_80x87.jpg" alt="" />
    				<div class="advice_text_box">
	                    <p class="user_name">252322*</p>
	                    <p class="user_advice">特别的好棒，好评</p>
	                    <p class="user_area">北京海淀区中关村*****</p>
                    </div>
                    <div class="start_img">
    					<img src="../imgs/star5.png" alt="">
    					<p>2018-3-12</p>
    				</div>
    			</li>
    			<li>
    				<img  class="head_img"src="../imgs/9010011.jpg_80x87.jpg" alt="" />
    				<div class="advice_text_box">
	                    <p class="user_name">252322*</p>
	                    <p class="user_advice">特别的好棒，好评</p>
	                    <p class="user_area">新疆维吾尔自治区乌鲁木齐市头屯河*****</p>
                    </div>
                    <div class="start_img">
    					<img src="../imgs/star5.png" alt="">
    					<p>2018-3-12</p>
    				</div>
    			</li>
    			<li>
    				<img  class="head_img"src="../imgs/9010011.jpg_80x87.jpg" alt="" />
    				<div class="advice_text_box">
	                    <p class="user_name">252322*</p>
	                    <p class="user_advice">她很喜欢和满意，这就足矣了，非常感谢！</p>
	                    <p class="user_area">北京海淀区中关村*****</p>
                    </div>
                    <div class="start_img">
    					<img src="../imgs/star5.png" alt="">
    					<p>2018-3-12</p>
    				</div>
    			</li>
    		</ul>
    	</div>
    	
    	</div>
    </div>
    <div class="maidian_box">
	  <img src="../imgs/m_special_flowers.png" alt="卖点">
	</div>
	<div class="bottom_section">
		<div class="pro_detail_info">
			<div class="img_list">
				<div class="img_box">
	                <img class="lazyimg" src="../imgs/20170915172608547.jpg"><img class="lazyimg" src="../imgs/20170901112235410.jpg" ><img class="lazyimg" src="../imgs/20170901112235771.jpg" ><img class="lazyimg" src="../imgs/20170901112236136.jpg" ><img class="lazyimg" src="../imgs/20170915172621520.jpg" ><img class="lazyimg" src="../imgs/2017090111223873.jpg" ><img class="lazyimg" src="../imgs/20170901112239453.jpg" ><img class="lazyimg" src="../imgs/20170901112240840.jpg" ><img class="lazyimg" src="../imgs/20170901112241221.jpg" ><img class="lazyimg" src="../imgs/20170901112243129.jpg" ><img class="lazyimg" src="../imgs/20170915172645985.jpg" ><img class="lazyimg" src="../imgs/20170901112248140.jpg" ><img class="lazyimg" src="../imgs/20170901112248820.jpg" ><img class="lazyimg" src="../imgs/20170915172702535.jpg" ><img src="../imgs/xianhua_cardstyle.jpg">
					
				</div>
				
			</div>
		</div>
		
	</div>
	<div class="null"></div>
	<div class="foot">
		<ul>
			<li><img src="../imgs/icon_custom_service.png" alt="" /> 
			<span>客服</span></li>
			<li> <img src="../imgs/icon_phone.png" alt="" /> 
			<span>电话</span></li>
			<li> <img src="../imgs/bottonmIcon_CartDefault.png" alt="" /> 
			<span>购物车</span></li>
		</ul>
		<a href="#/Section3" class="addCart">加入购物车</a>
		<a href="javascript:;" class="go_buy">立即购买</a>
		
	</div>	
	</div>
</template>
<script>
	
	export default{
		name:'Page',
		data(){
			return {
				list:[]
				
			}
		},
	
		
	}
</script>
<style scoped="scoped" src="../css/page.css">
	
</style>
