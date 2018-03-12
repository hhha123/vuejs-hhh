<template>
  <section>
	  <!--<div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide"><a href="#"><img src="../imgs/slide1.jpg"/></a></div>
		    <div class="swiper-slide"><a href="#"><img src="../imgs/slide2.jpg"/></a></div>
		    <div class="swiper-slide"><a href="#"><img src="../imgs/slide3.jpg"/></a></div>
		  </div>
		  <div class="swiper-pagination"></div>
		</div>-->
		<mt-swipe :auto="4000">
		  <mt-swipe-item><a href="#"><img src="../imgs/slide1.jpg"/></a></mt-swipe-item>
		  <mt-swipe-item><a href="#"><img src="../imgs/slide2.jpg"/></a></mt-swipe-item>
		  <mt-swipe-item><a href="#"><img src="../imgs/slide3.jpg"/></a></mt-swipe-item>
		</mt-swipe>
  </section>
</template>

<script>
export default {
  name: 'Section1',
  data () {
    return {
    }
  },
  mounted() {
//	var mySwiper = new Swiper('.swiper-container',{
//			  pagination: {
//			    el: '.swiper-pagination',
//			  }
//		})
  }
}
</script>

<style src="../css/Section1.css">
</style>
