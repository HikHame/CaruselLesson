;$(document).ready(function(){
	
	//$('.someClass').click(function(){
	//	alert('You click on button');
	//});
	
	//$('#someID').click(function(){
	//	alert('Some Id, only one')
	//});
	
	//$('button').click(function(){
	//	alert('All buttons');
	//});
	
	//$('button').click(function(){
	//	var val = $(this).text();
	//	alert(val);
	//	$(this).text('Another text');
	//	var idName = $(this).attr('id');
	//	alert(idName);
	//	$(this).attr('id', 'anotherId');
	//});
	
	//$('.box1').each(function(i){
	//	$(this).css('background-color', 'yellow');
	//	$(this).text('<h1>'+i+'</h1>');
	//	$(this).html('<h1>'+i+'</h1>');
	//	$(this).append('gfhjgjhgkhgh <br>');
	//	$(this).append('append');
	//	$(this).prepend('prepend');
	//});
	
	//$('.showBlock').click(function(){
		//$('.box1').show();
		//$('.box1').toggle(1000);
		//$('.box1').slideToggle(1000);
	//});
	
	//$('.box1').click(function(){
	//	$(this).animate({
	//		'margin-left': '300px'
	//	}, 400, function(){
	//		alert('Animate off')
	//	})
	//});
	
	//var images = ['work-1.jpg', //'work-2.jpg', 'work-3.jpg', //'work-4.jpg', 'work-5.jpg'];
	
	//var img = 0;
	
	//$('.imgBlock').css('background-image', 'url(img/'+images[img]+')');
	
	//for(var i = 0; i<images.length; i++){
	//	$('.dots').append('<div class="dot" data-img="'+i+'">');
	//};
	
	//$('.dot:first').addClass('active');
	
	//$('.dot').click(function(){
	//	$('.dot').removeClass('active');
	//	$(this).addClass('active');
	//	img = $(this).attr('data-img');
	//	$('.imgBlock').css('background-image', 'url(img/'+images[img]+')');
	//})
	
	//var dataTab;
	//$('p:first').show();
	
	//$('.tabBtns li').each(function(i){
	//	$(this).attr('data-tab', i);
	//});
	
	//$('p').each(function(i){
	//	$(this).attr('data-tab', i);
	//});
	
	//$('.tabBtns li').click(function(){
	//	$('.tabBtns li').removeClass('active');
	//	$(this).addClass('active');
	//	dataTab = $(this).attr('data-tab');
	//	$('p').hide();
	//	$('p[data-tab='+dataTab+']').show();
	//})
		
	
	
	var w = $('#slider_container').width();
	$('.slides>li').width(w);
	$('.slides').width(w*('.slides>li').length);
	$('.slides>li:last-child').prependTo('.slides');
	$('.slides').css('left', -w);
	
	for( var i = 0; i < $('.slides>li').length; i++ ){
	 	$('.dots').append('<div class="dot">');
	 };
	 
	$('.dot:first').addClass('active');
	
	$('.dot').each(function(i){
		$(this).attr('data-li', i);
	})
	$('.slides>li').each(function(i){
		$(this).attr('data-li', i);
	})
	$('.dot').click(function(){
	 	$('.dot').removeClass('active');
	 	$(this).addClass('active');
	 })
	
	
	function next(){
		$('.slides').animate({
			'margin-left': -w
		}, 400, function(){
			$('.slides>li:first-child').appendTo('.slides');
			$('.slides').css('margin-left', 0);
		})
	}
	
	$('#nextSlide').click(next);
	
	
	function prev(){
		$('.slides').animate({
			'margin-left': w
		}, 400, function(){
			$('.slides>li:last-child').prependTo('.slides');
			$('.slides').css('margin-left', 0);
		})
	}
	
	$('#prevSlide').click(prev);
})