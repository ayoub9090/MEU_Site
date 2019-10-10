 $(document).ready(function(){
	  browserZoomDefault();
	//all select elements style in the pages that has selectpicker class
	$('.selectpicker').selectpicker();	
	
	
	//menu scripts
		$(".site-main-menu li").hover(function () { //When trigger is hovered...
			$(this).children("ul").slideDown(300);
		}, function () {
			$(this).children("ul").slideUp(0);
		});
		
	$('.mobile-menu-main .has-submenu').click(function(){
		$('.mobile-menu-main .has-submenu').each(function(){$(this).next('ul').slideUp(200);});
		if(!$(this).next('ul').is(":visible")){
			$(this).next('ul').slideDown(300);			
		}
	});	

	//sidebar menu scripts
	$('ul.default-sidebar li.has-sub-menu > a').click(function(){
		
		if(!$(this).next('.sub-menu').is(":visible")){
			$(this).next('.sub-menu').slideDown(300);
			$(this).find('i').addClass('glyphicon-minus');
			$(this).parent('li').addClass('open');
		}else if($(this).next('.sub-menu').is(":visible")){
			$(this).next('.sub-menu').slideUp(200);
			$(this).find('i').removeClass('glyphicon-minus');
			$(this).parent('li').removeClass('open');
		}
	});	

	
	// slider posts
    $(".slider-posts").owlCarousel({
	    rtl:true,
		loop:true,
		margin:10,
		nav:true,
		navText:'',
	    autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
			}
	});
	//uni images collection slider
$('.university-images-collection').owlCarousel({
	    rtl:true,
		loop:false,
		margin:0,
		nav:true,
		navText:'',
	    autoplay:false,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
			}
	});
	
	
	//main-page-slider 
$('.main-page-slider').owlCarousel({
	    rtl:true,
		loop:true,
		margin:0,
		nav:true,
		navText:'',
	    autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		animateOut: 'fadeOut',
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
			}
	});	
	
	//partner-slider 
$('.partner-slider').owlCarousel({
	    rtl:true,
		loop:false,
		margin:0,
		nav:true,
		navText:'',
	    autoplay:false,
		margin: 10,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		animateOut: 'fadeOut',
		responsive:{
			0:{
				items:2
			},
			600:{
				items:9
			},
			1000:{
				items:9
			}
			}
	});	


	
	
	AOS.init({
		duration: 700
	});
	
	
	
	/****************** contact scripts **********************/
		// error variables
		var UserError  = true,
			EmailError = true,
			SubError   = true,
			MsgError   = true;

$(".contact-form .username").blur(function() {
	
	if($(this).val().length < 4){

		$(this).css('border','1px solid #F00');
		$(this).parent().find('.custom-alert').fadeIn(300).end().find('.asterix').fadeOut(300).end().find('span.cross').fadeIn(300).end().find('span.verify').fadeOut(300);
		UserError = true;
	}else{

		$(this).css('border','1px solid #080');
		$(this).parent().find('.custom-alert').fadeOut(300).end().find('.asterix').fadeOut(300).end().find('span.verify').fadeIn(300).end().find('span.cross').fadeOut(300);

		UserError = false;
	}
});



$(".contact-form .email").blur(function() {
	
	if($(this).val() === ''){

		$(this).css('border','1px solid #F00');
		$(this).parent().find('.custom-alert').fadeIn(300).end().find('.asterix').fadeOut(300).end().find('span.cross').fadeIn(300).end().find('span.verify').fadeOut(300);
		EmailError = true;
	}else{

		$(this).css('border','1px solid #080');
		$(this).parent().find('.custom-alert').fadeOut(300).end().find('.asterix').fadeOut(300).end().find('span.verify').fadeIn(300).end().find('span.cross').fadeOut(300);

		EmailError = false;
	}
});


$(".contact-form .subject").blur(function() {
	
	if($(this).val() === ''){

		$(this).css('border','1px solid #F00');
		$(this).parent().find('.custom-alert').fadeIn(300).end().find('.asterix').fadeOut(300).end().find('span.cross').fadeIn(300).end().find('span.verify').fadeOut(300);
		SubError = true;
	}else{

		
		$(this).css('border','1px solid #080');
		$(this).parent().find('.custom-alert').fadeOut(300).end().find('.asterix').fadeOut(300).end().find('span.verify').fadeIn(300).end().find('span.cross').fadeOut(300);

		SubError = false;
	}
});


$(".contact-form .message").blur(function() {
	
	if($(this).val() .length < 10){

		
		$(this).css('border','1px solid #F00');
		$(this).parent().find('.custom-alert').fadeIn(300).end().find('.asterix').fadeOut(300).end().find('span.cross').fadeIn(300).end().find('span.verify').fadeOut(300);
		MsgError = true;
	}else{

		$(this).css('border','1px solid #080');
		$(this).parent().find('.custom-alert').fadeOut(300).end().find('.asterix').fadeOut(300).end().find('span.verify').fadeIn(300).end().find('span.cross').fadeOut(300);
		MsgError = false;
	}
});


// submit form

$('.contact-form').submit(function(event) {
	 
	 if(UserError === true || EmailError === true || SubError === true || MsgError === true){

	 	event.preventDefault(); // prevent sending 
	 	$('.username,.email,.subject,.message').blur();
	 }


});

  /******************* end contact scripts ******/
	
 });
 
 
 
 function submitHeaderSearch(){
	 if($('.searchTerm-header').val().trim() != ""){
		 $('.searchTerm-header').val($('.searchTerm-header').val().trim());
		$('#submit-header-form').click();
	 }else{
		 return false;
	 }
 }
 
 $('.search_top_bar').hover(function(){
	 $('.searchTerm-header').show(0);
		$('.searchTerm-header').animate({ width: "180px"} , 600);
 });
 var menuopen=false;
  $('.toggle-mobile-menu').click(function(){
		if(!menuopen){
			$('.mobile-menu-main').slideDown(400);
			menuopen =true;
		}
		else{
			$('.mobile-menu-main').hide(400);
			menuopen = false;
		}
 });
 
 $(document).click(function(event) { 
    if(!$(event.target).closest('.search_top_bar').length) {
        if( $('.searchTerm-header').is(":visible")) {
			$('.searchTerm-header').animate({ width: "0px"} , 480,function(){ $('.searchTerm-header').hide(0);});
        }		
    }        
})
 
 
$('.lists-of-lists .default--list .has-sublist').click(function(){
	if( !$(this).next('.sublist').is(":visible")) {
		$(this).addClass('active');
		$(this).next('.sublist').slideDown();
	}else{
		$(this).removeClass('active');
		$(this).next('.sublist').slideUp();
	}
	
})


function wideLayout(){
	$('.container').addClass('container-fluid').removeClass('container');
}


function FullLayout(){
	$('.container-fluid').addClass('container').removeClass('container-fluid');
}

function browserZoomIn(){
	var corrent = parseFloat(window.parent.document.body.style.zoom);
	
	if(corrent <= 1.18 ){
		console.log(parseFloat(window.parent.document.body.style.zoom));
		window.parent.document.body.style.zoom = corrent + 0.03;
	}
}

function browserZoomOut(){
	var corrent = parseFloat(window.parent.document.body.style.zoom);
	
	if(corrent >= 0.8){
		window.parent.document.body.style.zoom = corrent - 0.1;
	}
}

function browserZoomDefault(){
	window.parent.document.body.style.zoom = 1;
}



//make heights fixed in rows
function setHeight(el) {
    $.fn.matchHeight._maintainScroll = true; //this is to stop jumping to top from hight plugin add by soos
    if ($(window).width() > 767) {
        $(el).matchHeight(
        {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    }

}
$(window).load(function () {
    /**
        DESC: fixed colums equals height in detail page
    **/
    setHeight($('.single-news-post,.single-static-section--last,.single-box > .thumbnail'));

});


function loadMoreNews(){
	$('.detail-page-bg > .container > .news-container').append($('.appended-data').html());
	$('.load-more-link').hide() // call this when done of the data
}