$(function() {

$('.prod-block').owlCarousel({
    center: true,
    items:4,
    loop:true,
    margin:10,
    nav: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
});
$('.image-slider').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
});
$('.reviews').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
});
$('.rewards').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    nav: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
});
$('.actions').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
});

	var show = true;
	var countbox = ".way1";
	$(window).on("scroll load resize", function(){
		if(!show) return false;
		var w_top = $(window).scrollTop();
		var e_top = $(countbox).offset().top;
		var w_height = $(window).height();
		var d_height = $(document).height();
		var e_height = $(countbox).outerHeight();
		$(countbox).each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if($(document).scrollTop() + w_height >= height  
				|| w_top + 200 >= e_top 
				// || w_height + w_top == d_height 
				// || e_height + e_top < w_height
				// || e_top - w_height < w_top
				){
				$('.way-wrapper .way1').removeClass('one').addClass('two');
				$('.way-wrapper .way2').removeClass('three').addClass('four');

				setTimeout(function(){
                    $('.way-wrapper .way2 .way-icon').removeClass('grey');
                    $('.second').css({
                    	'background-color': '#08b8e8',
                    	'color': '#fff',
                    	'box-shadow': '0px 2px 6px #333'
                    })
                }, 1800);

				// $('.way-wrapper .way2 .way-icon').delay(7000).removeClass('grey');
			show = false;
		}
	});
	});
	var show1 = true;
	var countbox1 = ".way3";
	$(window).on("scroll load resize", function(){
		if(!show1) return false;
		var w_top = $(window).scrollTop();
		var e_top = $(countbox1).offset().top;
		var w_height = $(window).height();
		var d_height = $(document).height();
		var e_height = $(countbox).outerHeight();
		$(countbox1).each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if($(document).scrollTop() + w_height >= height  
				|| w_top + 200 >= e_top 
				// || w_height + w_top == d_height 
				// || e_height + e_top < w_height
				// || e_top - w_height < w_top
				){
				setTimeout(function(){
				$('.way-wrapper .way4').removeClass('one').addClass('two');
				$('.way-wrapper .way3').removeClass('three').addClass('four');
				$('.way-wrapper .way2 .main-way-txt').addClass('txt-color');
				$('.way-wrapper .way3 .way-txt').addClass('txt-color');
				setTimeout(function(){
                    $('.way-wrapper .way4 .way-icon').removeClass('grey');
                      $('.third').css({
                    	'background-color': '#08b8e8',
                    	'color': '#fff',
                    	'box-shadow': '0px 2px 6px #333'
                    })
                }, 1800);
				}, 2000);
				// $('.way-wrapper .way2 .way-icon').delay(7000).removeClass('grey');
			show1 = false;
		}
	});
	});
	var show2 = true;
	var countbox2 = ".way5";
	$(window).on("scroll load resize", function(){
		if(!show2) return false;
		var w_top = $(window).scrollTop();
		var e_top = $(countbox2).offset().top;
		var w_height = $(window).height();
		var d_height = $(document).height();
		var e_height = $(countbox).outerHeight();
		$(countbox1).each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if($(document).scrollTop() + w_height >= height  
				|| w_top + 200 >= e_top 
				// || w_height + w_top == d_height 
				// || e_height + e_top < w_height
				// || e_top - w_height < w_top
				){
				setTimeout(function(){
				$('.way-wrapper .way5').removeClass('one').addClass('two');
				$('.way-wrapper .way6').removeClass('three').addClass('four');
				$('.way-wrapper .way4 .main-way-txt').addClass('txt-color');
				$('.way-wrapper .way5 .way-txt').addClass('txt-color');
				setTimeout(function(){
          $('.way-wrapper .way6 .way-icon').removeClass('grey');
  				$('.way-wrapper .way6 .main-way-txt').addClass('txt-color');
					$('.way-wrapper .way7 .way-txt').addClass('txt-color');
            $('.fourth').css({
          	'background-color': '#08b8e8',
                    	'color': '#fff',
                    	'box-shadow': '0px 2px 6px #333'
                    })
                }, 1800);
				}, 4000);
				// $('.way-wrapper .way2 .way-icon').delay(7000).removeClass('grey');
			show2 = false;
		}
	});
	});
// setInterval(function () {
// 			$('.way-wrapper .way').addClass('one')
// 			},3000);
// setInterval(function () {
// 			$('.way-wrapper .way').removeClass('one');
// 			}, 5000);


});
