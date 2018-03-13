<template>
  <div id="type">
  	<div class="top_bar">
  		<form action="">
  			<input type="text" placeholder="搜索鲜花、蛋糕、礼品"/>
  			<span></span>
  		</form>
  	</div>
  	<div class="all_type">
  		<div class="all_left">
  			<ul>
  				<li v-for="(item,i) in typelist"   @click="getIndex(i)">
  					<a :class="{'red':changeRed == i}" href="javascript:;">{{item.name}}</a>  
  				</li>
  			</ul>  						
  		</div>
  		<div class="all_right" v-for="item in showdata">			  		
	  			<a class="right_top_banner"> 
	  				<img v-bind:src="'../../static/imgs/'+item.src" alt="" />
	  				<div>
	  					<p>{{item.theme}}</p>
	  				</div>
	  			</a>
	  		
	  			<div class="right_content">
	  				<p class="title">
	  					{{item.title_left}}
	  					<a href="">{{item.title_right}}</a>
	  				</p>  				
	  				<ul >
	  					<li :index="obj.index" v-for="(obj,index) in item.pro">  						
	  						<a href="">
			  					<img :src="'../../static/imgs/'+item.pro[index].src" alt="" />
			  					<p>{{item.pro[index].intr}}</p>
			  				</a>
	  					</li> 	  					
	  				</ul>  				  				
	  			</div>  
	  			<div class="right_content" v-show="item.title_type=='花材'">
	  				<p class="title" >
	  					{{item.title_sec}}	  					
	  				</p>  				
	  				<ul >
	  					<li :index="obj.index" v-for="(obj,index) in item.typ">  						
	  						<a href="">
			  					<img :src="'../../static/imgs/'+item.typ[index].src" alt="" />
			  					<p>{{item.typ[index].intr}}</p>
			  				</a>
	  					</li> 	  					
	  				</ul>  				  				
	  			</div>
	  			<div class="right_content" v-show="item.title_type=='类型'">
	  				<p class="title" >
	  					{{item.title_type}}	  					
	  				</p>  				
	  				<ul >
	  					<li :index="obj.index" v-for="(obj,index) in item.type">  						
	  						<a href="">
			  					<img :src="'../../static/imgs/'+item.type[index].src" alt="" />
			  					<p>{{item.type[index].intr}}</p>
			  				</a>
	  					</li> 	  					
	  				</ul>  				  				
	  			</div>
	  			<div class="right_content"  v-show="item.title_color=='颜色'">
	  				<p class="title" >
	  					{{item.title_color}}	  					
	  				</p>  				
	  				<ul class="bor">
	  					<li :index="obj.index" v-for="(obj,index) in item.color" class="mar0">  						
	  						<a href="" class="disp">
			  					<img :src="'../../static/imgs/'+item.color[index].src" alt="" />
			  					<p>{{item.color[index].intr}}</p>
			  				</a>
	  					</li> 	  					
	  				</ul>  				  				
	  			</div>
	  			<div class="right_content" v-show="item.title_price=='价格'">
	  				<p class="title"  >
	  					{{item.title_price}}	  					
	  				</p>  				
	  				<ul class="bor">
	  					<li :index="obj.index" v-for="(obj,index) in item.price" class="mar0">  						
	  						<a href="" class="disp">			  					
			  					<p>{{item.price[index].intr}}</p>
			  				</a>
	  					</li> 	  					
	  				</ul>  				  				
	  			</div>
	  			<div class="right_content" v-show="item.title_num=='枝数'">
	  				<p class="title"  >
	  					{{item.title_num}}	  					
	  				</p>  				
	  				<ul class="bor">
	  					<li :index="obj.index" v-for="(obj,index) in item.num" class="mar0">  						
	  						<a href="" class="disp">			  					
			  					<p>{{item.num[index].intr}}</p>
			  				</a>
	  					</li> 	  					
	  				</ul>  				  				
	  			</div>
	  			<div class="right_content" v-show="item.title_are=='按城市选购'">
	  				<p class="title" >
	  					{{item.title_are}}	  					
	  				</p>  				
	  				<ul class="bor">
	  					<li :index="obj.index" v-for="(obj,index) in item.are" class="mar0">  						
	  						<a href="" class="disp">			  					
			  					<p>{{item.are[index].intr}}</p>
			  				</a>
	  					</li> 	  					
	  				</ul>  				  				
	  			</div>
	  				<div class="right_content"v-show="item.title_cake=='全国配送蛋糕'">
	  				<p class="title"  >
	  					{{item.title_cake}}	  					
	  				</p>  				
	  				<ul>
	  					<li :index="obj.index" v-for="(obj,index) in item.cake">  						
	  						<a href="">
			  					<img :src="'../../static/imgs/'+item.cake[index].src" alt="" />
			  					<p>{{item.cake[index].intr}}</p>
			  				</a>
	  					</li> 	  					
	  				</ul>  				  				
	  			</div>
	  			<div class="right_content" v-show="item.title_use=='礼品用途'">
	  				<p class="title"  >
	  					{{item.title_use}}	  					
	  				</p>  				
	  				<ul class="bor">
	  					<li :index="obj.index" v-for="(obj,index) in item.use" class="mar0">  						
	  						<a href="" class="disp">			  					
			  					<p>{{item.use[index].intr}}</p>
			  				</a>
	  					</li> 	  					
	  				</ul>  				  				
	  			</div>
	  			<div class="right_content" v-show="item.title_gift=='礼品价格'">
	  				<p class="title">
	  					{{item.title_gift}}	  					
	  				</p>  				
	  				<ul class="bor">
	  					<li :index="obj.index" v-for="(obj,index) in item.gift" class="mar0">  						
	  						<a href="" class="disp">			  					
			  					<p>{{item.gift[index].intr}}</p>
			  				</a>
	  					</li> 	  					
	  				</ul>  				  				
	  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>	
export default {
  name: 'type',
  data () {
    return {
    	changeRed:0,
    	showdata : [],
    	typelist:[
    		{name:"热门推荐"},
    		{name:"鲜花"},
    		{name:"永生花"},
    		{name:"蛋糕"},
    		{name:"巧克力"},
    		{name:"特色礼品"},
    		{name:"品牌公仔"},
    		{name:"礼篮"},
    		{name:"绿植花卉"}    		
    	],
    	right_content:[
    		{src:"18_day314_all.jpg",
    		 theme:"白色情人节，爱·必有回应",
    		 title_left:"大家都在找",
    		 pro:[    		 
    		 	{src:"rose.png",intr:"鲜花"},
    		 	{src:"kaiye.png",intr:"商务鲜花"},
    		 	{src:"yongshenghua.png",intr:"永生花"},
    		 	{src:"dangao.png",intr:"蛋糕"},
    		 	{src:"jinkouqiaokeli.png",intr:"巧克力"},
    		 	{src:"lipin.png",intr:"特色礼品"},
    		 	{src:"gongzai.png",intr:"品牌公仔"},
    		 	{src:"lilan.png",intr:"礼篮"},
    		 	{src:"lvzhi.png",intr:"绿植花卉"}
    		 ]
    	 },
	    	{src:"all_cla_ban_business flower.jpg",
	    		 theme:"浪漫告白·卡罗拉红玫瑰11枝￥245",
	    		 title_left:"用途",
	    		 title_right:"鲜花排行榜>",
	    		 title_sec:"花材",
	    		 title_type:"类别",
	    		 title_color:"颜色",
	    		 title_price:"价格",
	    		 title_num:"枝数",
	    		 pro:[
	    		 	{src:"more_btn.png",intr:"全部"},
	    		 	{src:"aiqing.png",intr:"爱情鲜花"},
	    		 	{src:"youqing.png",intr:"友情鲜花"},
	    		 	{src:"birthday.png",intr:"生日鲜花"},
	    		 	{src:"zhangbei.png",intr:"问候长辈"},
	    		 	{src:"repayteacher.png",intr:"回报老师"},
	    		 	{src:"wishes.png",intr:"祝福庆贺"},
	    		 	{src:"weddingcelebration.png",intr:"婚庆鲜花"},
	    		 	{src:"sympathy.png",intr:"探病慰问"},
	    		 	{src:"childbirth.png",intr:"生子祝贺"},
	    		 	{src:"daoqian.png",intr:"道歉鲜花"},
	    		 	{src:"household.png",intr:"家具鲜花"},
	    		 	{src:"aisi.png",intr:"哀思鲜花"},
	    		 	{src:"kaiye.png",intr:"开业花篮/商务"},
	    		 	{src:"jingpin.png",intr:"精品鲜花"},
	    		 	{src:"hongkong.png",intr:"香港送花"},
	    		 	{src:"aomen.png",intr:"香港送花"},
	    		 	{src:"taiwan.png",intr:"香港送花"}    		 	
	    		 ],
	    		 typ:[
	    		 	{src:"rose.png",intr:"玫瑰"},
	    		 	{src:"redrose.png",intr:"红玫瑰"},
	    		 	{src:"pinkrose.png",intr:"粉玫瑰"},
	    		 	{src:"whiterose.png",intr:"白玫瑰"},
	    		 	{src:"xiangbinrose.png",intr:"香槟玫瑰"},
	    		 	{src:"purplerose.png",intr:"紫玫瑰"},
	    		 	{src:"bluerose.png",intr:"蓝玫瑰"},
	    		 	{src:"yellowrose.png",intr:"黄玫瑰"},
	    		 	{src:"kangnaixin.png",intr:"康乃馨"},
	    		 	{src:"yujinxiang.png",intr:"郁金香"},
	    		 	{src:"baihe.png",intr:"百合"},
	    		 	{src:"fulang.png",intr:"扶郎"},
	    		 	{src:"matilian.png",intr:"马蹄莲"},
	    		 	{src:"xiangrikui.png",intr:"向日葵"}
	    		 ],
	    		 type:[
	    		 	{src:"chuanqinghuashu.png",intr:"传情花束"},
	    		 	{src:"jingzhihualan.png",intr:"精致花篮"},
	    		 	{src:"pingchahua.png",intr:"瓶插花"},
	    		 	{src:"tesehuali.png",intr:"特色花礼"},
	    		 	{src:"chuangyihuahe.png",intr:"创意花盒"},
	    		 	{src:"xianhualilan.png",intr:"鲜花礼盒"}
	    		 ],
	    		 color:[
	    		 	{src:"color_03.png",intr:"红色"},
	    		 	{src:"color_05.png",intr:"粉色"},
	    		 	{src:"color_07.png",intr:"香槟色"},
	    		 	{src:"color_09.png",intr:"黄色"},
	    		 	{src:"color_11.png",intr:"白色"},
	    		 	{src:"color_13.png",intr:"紫色"},
	    		 	{src:"color_15.png",intr:"蓝色"}
	    		 ],
	    		 price:[
	    		 	{intr:"特价鲜花"},
	    		 	{intr:"150元以下"},
	    		 	{intr:"150-200元"},
	    		 	{intr:"250-350元"},
	    		 	{intr:"350-550元"},
	    		 	{intr:"550-800元"},
	    		 	{intr:"800元以上"}
	    		 ],
	    		 num:[
	    		 	{intr:"9枝"},
	    		 	{intr:"10枝"},
	    		 	{intr:"11枝"},
	    		 	{intr:"12枝"},
	    		 	{intr:"13枝"},
	    		 	{intr:"14枝"},
	    		 	{intr:"15枝"},
	    		 	{intr:"16枝"},
	    		 	{intr:"22枝"},
	    		 	{intr:"29枝"},
	    		 	{intr:"33枝"},
	    		 	{intr:"36枝"},
	    		 	{intr:"50枝"},
	    		 	{intr:"66枝"},
	    		 	{intr:"99枝枝以上"}
	    		 ]
	    },
	    	{src:"all_cla_ban_freflowers.jpg",
    		 theme:"永生花盒·维多利亚的花园￥329",
    		 title_left:"永生花",
    		 title_right:"永生花排行榜>",    		 
    		 pro:[
    		 	{src:"more_btn.png",intr:"全部"},
    		 	{src:"jingdianhuahe.png",intr:"经典花盒"},
    		 	{src:"juxingmeigui.png",intr:"巨型玫瑰"},
    		 	{src:"xunyicao.png",intr:"薰衣草"},
    		 	{src:"livingflower.png",intr:"永生瓶花"},
    		 	{src:"specialysh.png",intr:"特色永生花"}
    		 ]
    		},
    		{src:"all_cla_ban_cake.jpg",
    		 theme:"美味蛋糕让生活充满甜蜜",
    		 title_left:"精选品牌蛋糕",
    		 title_are:"按城市选购",
    		 title_cake:"全国配送蛋糕",
    		 pro:[
    		 	{src:"more_btn.png",intr:"全部"},
    		 	{src:"ganso.png",intr:"元祖"},
    		 	{src:"21cake.jpg",intr:"甘一客"},
    		 	{src:"lecake.png",intr:"诺心"},
    		 	{src:"incake.png",intr:"INCAKE"},
    		 	{src:"bestCake.jpg",intr:"贝思客"},
    		 	{src:"boncake.png",intr:"BANCAKE"},
    		 	{src:"mcake.png",intr:"Mcake"},
    		 	{src:"waffleboy.png",intr:"窝夫小子"},
    		 	{src:"micamika.png",intr:"米卡米卡"},
    		 	{src:"cake_brand_s_fxn.png",intr:"法西尼蛋糕"},
    		 	{src:"xingfuxibing.png",intr:"幸福西饼"},
    		 	{src:"vcake.png",intr:"Vcake"},
    		 	{src:"yipinxuan.png",intr:"一品轩"},
    		 	{src:"xinzhihe.jpg",intr:"心之和蛋糕"} 
    		 ],
    		 cake:[
    		 	{src:"xiannai.png",intr:"鲜奶蛋糕"},
    		 	{src:"shuiguo.png",intr:"水果蛋糕"},
    		 	{src:"shengxiao.png",intr:"生肖蛋糕"},
    		 	{src:"qingren.png",intr:"情侣蛋糕"},
    		 	{src:"hunqing.png",intr:"婚庆蛋糕"},
    		 	{src:"ertong.png",intr:"儿童蛋糕"},
    		 	{src:"oushi.png",intr:"欧式蛋糕"},
    		 	{src:"jieqing.png",intr:"节庆蛋糕"},
    		 	{src:"zhushou.png",intr:"祝寿蛋糕"},
    		 	{src:"musi.png",intr:"慕斯蛋糕"},
    		 	{src:"wutang.png",intr:"无糖蛋糕"},
    		 	{src:"qiaokeli.png",intr:"巧克力蛋糕"}
    		 ],
    		 	are:[
	    		 	{intr:"北京"},
	    		 	{intr:"上海"},
	    		 	{intr:"深圳"},
	    		 	{intr:"广州"},
	    		 	{intr:"重庆"},
	    		 	{intr:"成都"},
	    		 	{intr:"沈阳"},
	    		 	{intr:"青岛"},
	    		 	{intr:"大连"},
	    		 	{intr:"杭州"},
	    		 	{intr:"南京"},
	    		 	{intr:"苏州"},
	    		 	{intr:"济南"},
	    		 	{intr:"天津"},
	    		 	{intr:"长沙"},
	    		 	{intr:"武汉"},
	    		 	{intr:"郑州"},
	    		 	{intr:"贵阳"},
	    		 	{intr:"南昌"},
	    		 	{intr:"合肥"},
	    		 	{intr:"更多"}
	    		 ]
    		},
    		{src:"all_cla_ban__choclate.jpg",
    		 theme:"巧克力蔻定制16粒装手工夹心巧克力￥258",
    		 title_left:"巧克力分类",
    		 title_right:"巧克力排行榜>",    		
  		
    		 pro:[
    		 	{src:"more_btn.png",intr:"全部"},
    		 	{src:"cailler.png",intr:"进口巧克力"},
    		 	{src:"qiaoluo.png",intr:"巧罗巧克力"},
    		 	{src:"ruishilian.png",intr:"瑞士莲巧克力"},
    		 	{src:"qiaokouqiaokeli.png",intr:"巧蔻巧克力"}    		 
    		 ]
    		},
    		{src:"all_cla_ban_gift.jpg",
    		 theme:"特色礼品·小熊拥抱香氛礼盒￥89",
    		 title_left:"礼品类别",
    		 title_right:"特色礼品排行榜",
    		 title_use:"礼品用途",
    		 title_gift:"礼品价格",  
    		  gift:[
	    		 	{intr:"80元以下"},
	    		 	{intr:"80-150元"},
	    		 	{intr:"150-300元"},
	    		 	{intr:"300-500元"},
	    		 	{intr:"500元以上"}
	    		 ],
    		  use:[
	    		 	{intr:"生日礼品"},
	    		 	{intr:"约会/求爱"},
	    		 	{intr:"结婚礼品"},
	    		 	{intr:"感谢/祝福"},
	    		 	{intr:"拜访探望"},
	    		 	{intr:"结婚纪念日"},
	    		 	{intr:"乔迁礼品"},
	    		 	{intr:"家居礼品"}
	    		 ],
    		 pro:[
    		 	{src:"more_btn.png",intr:"全部"},
    		 	{src:"neidiao.png",intr:"水晶内雕"},
    		 	{src:"yongshenghua.png",intr:"永生瓶花"},
    		 	{src:"jinbohua.png",intr:"金箔花"},
    		 	{src:"yinyuehe.png",intr:"音乐盒"},
    		 	{src:"baozhen.png",intr:"睡枕/抱枕"},
    		 	{src:"huazhuangjing.png",intr:"化妆镜"},
    		 	{src:"shoushi.png",intr:"首饰"},
    		 	{src:"TangleTeezerHairbrushs.png",intr:"TangleTeezer"},
    		 	{src:"Giftstalk.png",intr:"Giftstalk精选"},
    		 	{src:"naileasy.png",intr:"naileasy指甲油"},
    		 	{src:"chuangyigift.png",intr:"创意礼品"},
    		 	{src:"hellokitty.png",intr:"品牌公仔"},
    		 	{src:"jinkouqiaokeli.png",intr:"品牌巧克力"},
    		 	{src:"lipincard.png",intr:"礼品卡"},    		 	
    		 	{src:"duorou.png",intr:"多肉植物盆栽"},    		 	
    		 ]
    		},
    		{src:"all_cla_ban_doll.jpg",
    		 theme:"公仔创意兔子花束·兔子小姐￥139",
    		 title_left:"品牌公仔分类",
    		 title_right:"品牌公仔排行榜>",
    		 pro:[
    		 	{src:"more_btn.png",intr:"全部"},
    		 	{src:"hello-kitty.png",intr:"hello kitty"},
    		 	{src:"katong.png",intr:"Doge神烦狗"},
    		 	{src:"bestlife.png",intr:"bestlife"},
    		 	{src:"katonghuashu.jpg",intr:"卡通花束"}    		 
    		 ]
    		},
    		{src:"all_cla_gift busket.jpg",
    		 theme:"温情礼篮·愿祝福常相伴&ensp;￥338",
    		 title_left:"礼篮",		    		
    		 pro:[
    		 	{src:"baskets.png",intr:"礼篮"}    		 	   		 
    		 ]
    		},
    		{src:"18_day314_all.jpg",  
    		 title_left:"绿植花卉",    		  		 
    		 pro:[
    		 	{src:"more_btn.png",intr:"全部"},
    		 	{src:"lvzhi.png",intr:"绿色植物"},
    		 	{src:"pengzai.png",intr:"盆栽花卉"}
    		 ]
    		}
    	]
    }   
  },
  methods: {
  	getIndex(index){     	
  		this.changeRed = index;
  		this.showdata = [];
//		this.target = index;  		
//		console.log(this.target);
  		this.showdata.push(this.right_content[index]);
//    		console.log(this.showdata)
//		console.log(this.right_content)
  	}
  },
  mounted(){
  	this.getIndex(0);
  }
}
</script>
<style src="../../css/common.css"></style>	
<style src="../../css/type.css" scoped></style>
