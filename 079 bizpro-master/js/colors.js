$(document).ready(function(){
	
		
	$(".color1" ).click(function(){
		$("#colors" ).attr("href", "css/skin/blaze.css" );
		return false;
	});
	
		
	$(".color2" ).click(function(){
		$("#colors" ).attr("href", "css/skin/blue.css" );
		return false;
	});
	
	$(".color3" ).click(function(){
		$("#colors" ).attr("href", "css/skin/green.css" );
		return false;
	});
	
	$(".color4" ).click(function(){
		$("#colors" ).attr("href", "css/skin/orange.css" );
		return false;
	});
		
	$(".color5" ).click(function(){
		$("#colors" ).attr("href", "css/skin/pink.css" );
		return false;
	});
	
	$(".color6" ).click(function(){
		$("#colors" ).attr("href", "css/skin/amest.css" );
		return false;
	});
	
	$(".color7" ).click(function(){
		$("#colors" ).attr("href", "css/skin/yellow.css" );
		return false;
	});
	
	$(".color8" ).click(function(){
		$("#colors" ).attr("href", "css/skin/red.css" );
		return false;
	});
	
		

	$('.icon').click (function(event){
		event.preventDefault();
		if( $ (this).hasClass('inOut')  ){
			$('.mp-color').stop().animate({right:'0px'},500 );
		} else{
			$('.mp-color').stop().animate({right:'-200px'},500 );
		} 
		$(this).toggleClass('inOut');
		return false;

	}  );

	
	
	
	
} );
