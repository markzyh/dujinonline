
$(function() {

	//关于我们
	$(window).scroll(function() {
			var popo = $(window).scrollTop();
			if(popo > 500) {
				$('.gyjj-left').addClass('animated  slideInDown');
				$('.gyjj-right').addClass('animated slideInUp');
			}
			if(popo > 900) {
				$('.gyys-left-m img').addClass('animated  fadeInLeft');
				$('.gyys-right-m .sixtop').addClass('animated fadeInDown');
				$('.gyys-right-m .gyjj-font').addClass('animated fadeInRight');
			}
			if(popo >1200) {
				$('.gyfw .puctop').addClass('animated fadeInDown')
				$('.gyfwf').addClass('animated fadeInDown');
				$('.gufwul').addClass('animated fadeInUp');
			}
			if(popo >1600) {
				$('.gylc .puctop').addClass('animated fadeInDown')
				$('.lctu').addClass('animated fadeInLeft');
				$('.lcfb').addClass('animated fadeInUp');
			}
			if(popo > 2000) {
				$('.whll .sixtop').addClass('animated fadeInLeft')
				$('.whllp1').addClass('animated fadeInUp');
				$('.whllp2').addClass('animated fadeInUp');
				$('.whll-fl').addClass('animated fadeInRight');
			}
	});

	$(".gufwul ul li").hover(function() {
		$(".sip").removeClass("bsip");
		$(this).find(".sip").addClass("bsip");

		$(".kip").removeClass("bkip");
		$(this).find(".kip").addClass("bkip");
		
		$(".kpkong").removeClass("kpk2");
		$(this).find(".kpkong").addClass("kpk2");

		$(".bxian1").removeClass("bbx");
		$(this).find(".bxian1").addClass("bbx");

		$(".kipico").removeClass("bkic");
		$(this).find(".kipico").addClass("bkic");
	});

		//关于我们
});