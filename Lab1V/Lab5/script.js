//jQuery('.p','.html()');
//alert("helloworld");

//jQuery(document).ready(function() {
//	alert(jQuery('.headitem').html());
//});

jQuery(function($) {

	
	$('#accordion').accordion();
//*************************************************************
	$('#menu').menu();
//*************************************************************
	
	$('#slider').slider({
		min: 0,
		max: 100,
		step: 10,
		slide: function( event, ui ) {
             $( "#slider_out" ).html( ui.value );
            }
	  });
//**************************************************************
    var $data = $(".portfolio-area").clone();
    var $filteredData = $data.find('.portfolio-item2');

    $(".portfolio-area").quicksand($filteredData, {
            duration: 600,
            adjustHeight: 'auto'
        }, function () {
                lightboxPhoto();
                        });        
    $(this).addClass("active");             
     return false;
	});


	
	


