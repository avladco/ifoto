 $(document).ready(function() {
	 
	$('.flash').fadeOut(800);
	
	var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'css/snap.mp3');
        //audioElement.setAttribute('autoplay', 'autoplay');
	
	function flashEffect(){	
		$('#fotograf-div').show('slide', 500, function(){	//fotograf
			setTimeout(function () {
				$('.flash').fadeIn(100, function(){		//alb efect
					audioElement.play();	
					$('#fotograf-div').hide();
					//	setTimeout(function () {
					//	$('.flash').fadeOut(500); //animate({backgroundColor: 'rgba(0,0,0,0.7)'},500);  //negru efect
					//	}, 100);						//pauza alb
				});
			}, 200);									//pauza fotograf
		});
	};
	
	
	$.fn.addImage = function(nr, folder, count) { // par = Folder
		for(var i = 1; i <= count; i++) 	{
			$('.gallery'+ nr +'').append('<a href="../'+ folder +'/big/'+ i +'.jpg" data-lightbox="group" data-title="'+ folder +'">  <img src="../'+ folder +'/small/'+ i +'.jpg" alt="" /></a>')
		};
	};

	
	$('#i').click(function(){
		flashEffect();	
		setTimeout(function () {	window.location.href = "pag/individual.html";	}, 1200);	
	});
	
	$('#f').click(function(){
		flashEffect();	
		setTimeout(function () {	window.location.href = "pag/family.html";	}, 1200);	
	});
	
	$('#o1').click(function(){
		flashEffect();	
		setTimeout(function () {	window.location.href = "pag/occasion.html";	}, 1200);	
	});
	
	$('#t').click(function(){
		flashEffect();	
		setTimeout(function () {	window.location.href = "pag/traditional.html";	}, 1200);	
	});
	
	$('#o2').click(function(){
		flashEffect();	
		setTimeout(function () {	window.location.href = "pag/other.html";	}, 1200);	
	});
	
});