<template>
	<div id="list">		
	  <div class="top">
	  	 <img src="../../static/imgs/headChevronLeft.png" alt="" />  
	  	 <img src="../../static/imgs/logo@2x.png" alt="" />  
	  	 <img src="../../static/imgs/headerIconMore.png" alt="" />
	  </div>
		<div class="nav">			
				<a href="">综合</a>
				<a href="">销量</a>
				<a href="">价格</a>
				<a href="">最新</a>			
		</div>	
		<div class="tab_nav">
			<span>全部</span>
			<span>爱情鲜花</span>
			<span>友情鲜花</span>
			<span>送长辈鲜花</span>
			<span>
				鲜花分类
				<i></i>
			</span>
		</div>
		<ul>
			<li v-for="item in list">
				<a href="">
					<img :src="'../../static/imgs/'+item.src" alt="" />
					<div>						
						<p>{{item.p_top}}</p>
						<p>{{item.p_center}}</p>
						<p>￥{{item.p_bottom}}</p>
					</div>
				</a>
			</li>
		</ul>
	</div>	
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
    	list:[
    		{
    			src:"9010966.jpg_220x240.jpg",
    			p_top:"一往情深",
    			p_center:"精品玫瑰礼盒：19枝红玫瑰，勿忘我适量",
    			p_bottom:"245"
    		},
    		{
    			src:"9010011.jpg_220x240.jpg",
    			p_top:"一心一意",
    			p_center:"玫瑰11枝，粉色勿忘我0.3扎",
    			p_bottom:"139"
    		},
    		{
    			src:"9012089.jpg_220x240.jpg",
    			p_top:"爱在心头",
    			p_center:"玫瑰50枝：戴安娜粉玫瑰19枝，红玫瑰31枝",
    			p_bottom:"389"
    		},
    		{
    			src:"9010947.jpg_220x240.jpg",
    			p_top:"真爱如初",
    			p_center:"雪山玫瑰11枝、深紫色勿忘我0.3枝",
    			p_bottom:"206"
    		},
    		{
    			src:"9012177.jpg_220x240.jpg",
    			p_top:"不变的承诺",
    			p_center:"99枝红玫瑰",
    			p_bottom:"679"
    		},
    		{
    			src:"9012154.jpg_220x240.jpg",
    			p_top:"甜美公主",
    			p_center:"白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝",
    			p_bottom:"378"
    		},
    		{
    			src:"9012223.jpg_220x240.jpg",
    			p_top:"我只钟情你",
    			p_center:"香槟玫瑰11枝、白色小雏菊3枝",
    			p_bottom:"239"
    		},
    		{
    			src:"9012009.jpg_220x240.jpg",
    			p_top:"忘情巴黎",
    			p_center:"33枝红玫瑰",
    			p_bottom:"298"
    		},
    		{
    			src:"9012092.jpg_220x240.jpg",
    			p_top:"母爱",
    			p_center:"紫红色康乃馨9枝，粉色多头康乃馨10枝",
    			p_bottom:"178"
    		},
    		{
    			src:"9010969.jpg_220x240.jpg",
    			p_top:"你爱珍贵",
    			p_center:"精品玫瑰礼盒：香槟玫瑰19枝，勿忘我适量",
    			p_bottom:"258"
    		}
    	]
    }
  }
}
</script>
<style src="../../css/common.css"></style>
<style src="../../css/list.css" scoped></style>
