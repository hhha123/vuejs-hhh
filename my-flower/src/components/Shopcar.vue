<template>
<div>
   <section class="shop">
        <div class="content">
        	<div class="list_item" v-for="(data,index) in shopCart">
        		<label><span class="icon_check" @click="bjChange()"></span></label>
        		<a href="#/page"><img :src="data.img"/></a>
        		<div class="p_infor">
        			<p class="p_name"><a href="">{{data.name}}</a></p>
        			<p class="p_notice">顺丰快递深圳发货</p>
        			<p class="p-sku" @click="layerShow()">规格：<em class="sku-size">经典透明款</em><span class="arrow"></span></p>
        			<div class="panel">
        				<span class="price">{{data.price}}</span>
        				<a href="javascript:;" class="del">删除</a>
        				<div class="setNum">
        					<span class="disabled">-</span>
        					<input type="text" value="1" />
        					<span>+</span>
        				</div>
        			</div>
        		</div>
        	</div>
            <div class="tips"></div>
        </div>
        <div class="shop_nav">
  		   <a href="javascript:;">购买该商品的还购买了</a>
  		   <a href="javascript:;">热卖鲜花</a>
  	    </div>
  	    <div class="layer-infor" v-show="flag">
  	    	<div class="sku-name">
  	    		<img src="../imgs/220x240.jpg"/>
  	    		<div class="sku-text">
  	    			<p>十八音水晶钢琴</p>
  	    			<span>￥228</span>
  	    		</div>
  	    	</div>
  	    	<div class="sku-guige">
  	    		<p>规格</p>
  	    		<ul>
  	    			<li @click="color(index)" :class="{active:item.current}" v-for="(item,index) in list">{{item.name}}</li>
  	    		</ul>
  	    	</div>
  	    	<div class="sku-ok" @click="layerHide()">确认</div>
  	    </div>
  	    <a class="layer-icon" @click="layerHide()" v-show="flag"></a>
  	    <div class="layer" v-show="flag"></div>
   </section>
</div>
</template>

<script>
export default{
	name: 'Shopcar',
	data: function(){
		return {
		   flag: false,
		   check: true,
		   list: [{name:"经典透明款",current:true},
		          {name:"紫水晶",current:false},
		          {name:"粉水晶",current:false}
		          ],
		   shopCart: [
		          {id:"1",img:"//img01.hua.com/uploadpic/newpic/1064035.jpg_220x240.jpg",name:"[礼品]宝石旋转木马/蓝",price:"￥158"},
		          {id:"2",img:"//img01.hua.com/uploadpic/newpic/3010008.jpg_220x240.jpg",name:"[礼品]十八音粉水晶钢琴",price:"￥208"}
		   ]
		}
	},
	methods: {
		layerShow(){
			this.flag = true;
		},
		layerHide(){
			this.flag = false;
		},
		bjChange(){
			if(this.check){
				$(".icon_check").css("background","url(../static/imgs/checkbox2.png) no-repeat center center");
				$(".icon_check").css("background-size","100%");
			}else{
				$(".icon_check").css("background","url(../static/checkbox1.png) no-repeat center center");
				$(".icon_check").css("background-size","100%");
			}
			this.check = !this.check;
		},
		color(index){
			var len = this.list.length;
			for(var i=0; i<len; i++){
				this.list[i].current = false;
			}
			this.list[index].current = true;
			//$(".sku-size").eq(index).html(this.list[index].name);
		}
	}
}
</script>
<style scoped="scoped" src="../../css/shopCart.css">
</style>