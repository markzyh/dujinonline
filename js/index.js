$(document).ready(function(){
	var fadePanel = $(".fade-panel")
	var slideInUp = $(".slideInUp")
	slideInUp.css({
		position:'relative',
		bottom:'-600px'
	})
	$(".fade-right").css({
		position: 'relative',
		left: '-600px',
		opacity: 0
	})
	$(".fade-left").css({
		position: 'relative',
		right: '-600px',
		opacity: 0
	})
	$('.fade-right,.fade-left').css('opacity','0')
	function fadeEffect(){
		var fadeTime = 1000
		$('.fade-right.animate').animate({
			left:'-600px',
			opacity:0,
			left:'0',
			opacity:1
		},fadeTime)
		$('.fade-left.animate').animate({
			right:'-600px',
			opacity:0,
			right:'0',
			opacity:1
		},fadeTime)
	}
	function slideInUpEffect(){
		var slideSpeed = 1000
		$('.slideInUp.animate').animate({
			bottom:'-400px',
			opacity:0,
			bottom:'-200px',
			opacity:0.5,
			bottom:0,
			opacity:1
		},slideSpeed)
	}
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop()
		for(var i=1;i<=fadePanel.length;i++){	
			var fadePanelTop = fadePanel.eq(i-1).offset().top
			if(scrollTop>fadePanelTop-600){
				fadePanel.eq(i-1).find('.fade-right,.fade-left').addClass('animate')
				fadeEffect()
			}
		}
		for(var i=1;i<=slideInUp.length;i++){	
			var slideInUpTop = slideInUp.eq(i-1).offset().top
			if(scrollTop>slideInUpTop-1200){
				slideInUp.eq(i-1).addClass('animate')
				slideInUpEffect()
			}
		}

	})
	
	
})


