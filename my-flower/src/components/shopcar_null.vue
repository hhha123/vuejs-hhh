<template>
<div>
	<div class="box">
  		<img src="../../static/imgs/empty_cart3.png" alt="" />
  		<p>别让你的心意空空如也</p>
  		<a href="#/">去挑选礼物</a>
  	</div>
  	<div class="shopTitle">
  		<span>商品推荐</span>
  	</div>
</div>
</template>

<script>
export default{
	name: 'shopcar_null'
}
</script>

<style scoped="scoped">
	#shopcar .box {
  font-size: .14rem;
  }
  #shopcar .box img {
    width: 100%;
    margin: .3rem 0 .1rem 0; }
  #shopcar .box p {
    font-size: .14rem;
    text-align: center; }
  #shopcar .box a {
    width: 1.1rem;
    display: block;
    height: .32rem;
    line-height: .32rem;
    border: 1px solid #fd6602;
    color: #fd6602;
    text-align: center;
    margin: .2rem auto;
    border-radius: .03rem; }
#shopcar .shopTitle{
	border-top: .1rem solid #f4f4f4;
	color: #111;
	font-size: .14rem;
	height: .46rem;
    line-height:.38rem;
    padding: 0 .1rem;
}
</style>