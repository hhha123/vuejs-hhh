<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><a href="#/sort"><img src="../imgs/slide1.jpg"/></a></div>
	        <div class="swiper-slide"><a href="#/sort"><img src="../imgs/slide2.jpg"/></a></div>
	        <div class="swiper-slide"><a href="#/sort"><img src="../imgs/slide3.jpg"/></a></div>
	    </div>
	    <div class="swiper-pagination"></div>
	</div>
</template>

<script>
export default {
   name: "Swiper",
   mounted() {
   	  this.$nextTick(function(){
   	  	  var mySwiper = new Swiper('.swiper-container',{
			  pagination: {
			    el: '.swiper-pagination'
			  },
			  loop: true,
			  autoplay: true
		   })
   	  })
   }
}
</script>

<style scoped="scoped">
	.swiper-slide img{
		width: 100%;
		height:1.8rem;
	}
</style>