$(function(){
	
	var mySwiper3 = new Swiper('.swiper-ban',{
		slidesPerView: 1,
		pagination : '.swiper-iphswiper',
		loop:true,
		grabCursor: true,
		paginationClickable: true,
		updateOnImagesReady : true,
		autoplay: 5000,
		speed: 800,
		autoplayDisableOnInteraction : false
	});

	var mySwiper3 = new Swiper('.swiper-hm1ul',{
		slidesPerView: 6,
		loop:false,
		grabCursor: true,
		paginationClickable: true,
		updateOnImagesReady : true,
		autoplayDisableOnInteraction : false
	});

	var mySwiper5 = new Swiper('.swiper-hm5',{
		pagination: '.pagination-hm5',
		slidesPerView: 1,
		loop: true,
		autoplay : 5000,
		speed:1000,
		autoplayDisableOnInteraction : false,
		grabCursor: true,
		paginationClickable: true,
		updateOnImagesReady : true
	});
	// $('.hm5-left').on('click', function(e){
	// 	e.preventDefault()
	// 	mySwiper5.swipePrev()
	// });
	// $('.hm5-right').on('click', function(e){
	// 	e.preventDefault()
	// 	mySwiper5.swipeNext()
	// });

	mySwipermmm();

})
function mySwipermmm(){
	var windoWidth = $(window).width();
	if(windoWidth>1367){
		mySwiper4 = new Swiper('.swiper-hm4sp',{
			slidesPerView: 8,
			loop: true,
			autoplay : 5000,
			speed:1000,
			autoplayDisableOnInteraction : false,
			grabCursor: true,
			paginationClickable: true,
			updateOnImagesReady : true
		})
		mySwiper6 = new Swiper('.swiper-zhuluslider',{
			slidesPerView: 5,
			loop: true,
			autoplay : 5000,
			speed:1000,
			autoplayDisableOnInteraction : false,
			grabCursor: true,
			paginationClickable: true,
			updateOnImagesReady : true
		});
	}else if(windoWidth<1366&&windoWidth>1025){
		mySwiper4 = new Swiper('.swiper-hm4sp',{
			slidesPerView: 6,
			loop: true,
			autoplay : 5000,
			speed:1000,
			autoplayDisableOnInteraction : false,
			grabCursor: true,
			paginationClickable: true,
			updateOnImagesReady : true
		})
		mySwiper6 = new Swiper('.swiper-zhuluslider',{
			slidesPerView: 4,
			loop: true,
			autoplay : 5000,
			speed:1000,
			autoplayDisableOnInteraction : false,
			grabCursor: true,
			paginationClickable: true,
			updateOnImagesReady : true
		});
	}else if(windoWidth<1024&&windoWidth>769){
		mySwiper4 = new Swiper('.swiper-hm4sp',{
			slidesPerView: 4,
			loop: true,
			autoplay : 5000,
			speed:1000,
			autoplayDisableOnInteraction : false,
			grabCursor: true,
			paginationClickable: true,
			updateOnImagesReady : true
		})
		mySwiper6 = new Swiper('.swiper-zhuluslider',{
			slidesPerView: 3,
			loop: true,
			autoplay : 5000,
			speed:1000,
			autoplayDisableOnInteraction : false,
			grabCursor: true,
			paginationClickable: true,
			updateOnImagesReady : true
		});
	}else if(windoWidth<768){
		mySwiper4 = new Swiper('.swiper-hm4sp',{
			slidesPerView: 3,
			loop: true,
			autoplay : 5000,
			speed:1000,
			autoplayDisableOnInteraction : false,
			grabCursor: true,
			paginationClickable: true,
			updateOnImagesReady : true
		})
		mySwiper6 = new Swiper('.swiper-zhuluslider',{
			slidesPerView: 2,
			loop: true,
			autoplay : 5000,
			speed:1000,
			autoplayDisableOnInteraction : false,
			grabCursor: true,
			paginationClickable: true,
			updateOnImagesReady : true
		});
	}
	$(".swiper-hm4sp").mouseenter(function () {
		mySwiper4.stopAutoplay();
	}).mouseleave(function(){
		mySwiper4.startAutoplay();
	});
	
	$('.hm4-left').on('click', function(e){
		e.preventDefault()
		mySwiper4.swipePrev()
	})
	$('.hm4-right').on('click', function(e){
		e.preventDefault()
		mySwiper4.swipeNext()
	})

	$(".hm1fldivs").mouseenter(function () {
			mySwiper6.stopAutoplay();
		}).mouseleave(function(){
			mySwiper6.startAutoplay();
		});
	$('.zlswiper-prev').on('click', function(e){
		e.preventDefault()
		mySwiper6.swipePrev()
	})
	$('.zlswiper-next').on('click', function(e){
		e.preventDefault()
		mySwiper6.swipeNext()
	})
}