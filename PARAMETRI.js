$(document).ready(function() {

/*==============================================================================*/

	$.fn.addImage( 1, 'INDIVIDUAL',  8 ); 		/*	ULTIMA CIFRA = CANTITATEA	*/
	$.fn.addImage( 2, 'FAMILY', 	 11 ); 		/*	ULTIMA CIFRA = CANTITATEA	*/
	$.fn.addImage( 3, 'OCCASION',    10 ); 		/*	ULTIMA CIFRA = CANTITATEA	*/
	$.fn.addImage( 4, 'TRADITIONAL', 4 ); 		/*	ULTIMA CIFRA = CANTITATEA	*/
	$.fn.addImage( 5, 'OTHER', 		 10 ); 		/*	ULTIMA CIFRA = CANTITATEA	*/
	
	
	
	
	
	
	
	
/*===============================================================================*/	
	
	
	$('.home-butt').click(function(){
	$('.flash').fadeIn(400);
		setTimeout(function () {	window.location.href = "../index.html";	}, 400);	
	});
	
	lightbox.option({
      'resizeDuration': 300,
	  'disableScrolling': true,
	  'fitImagesInViewport': true
    });

	$("#mygallery").justifiedGallery({
		rowHeight : 250,
		lastRow : 'nojustify',
		margins : 7
	});

	
});