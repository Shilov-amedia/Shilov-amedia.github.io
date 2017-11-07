$.ajax({
	'url': "/data-second-carousel.json",
	'dataType': "json",
	'success': function(secondCarousel){
		var source   = $('#js-Carousel-Template').html();
		$('#js-Carousel-Template').html('');
		var template = Handlebars.compile(source);
		var temp = {jsonData: secondCarousel['second-carousel']};
		$('.carosel-block').append( template(temp) );
		
		$(document).ready(function(){
    $("#menu-navbar, #navigate_footer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

$(document).ready(function() {
	$('.js-first-carousel').owlCarousel({
		loop:true, 
		nav:false, 
		autoplay:true, 
		smartSpeed:1000, 
		autoplayTimeout:4000,
		animateOut: 'fadeOut',
    animateIn: 'fadeIn',
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
});


$(document).ready(function(){

$('.js-second-carousel').owlCarousel({
items: 3,
loop: true,
autoplay:true, 
smartSpeed:1000, 
autoplayTimeout:4000,
dots: false,
 margin: 30,
 responsive:{ 
			0:{
				items:1
			},
			600:{
				items:2
			},
			992:{
				items:3
			}
		}
}
);
owl = $('.js-second-carousel').owlCarousel();
$(".owl-prev-second").click(function () {
    owl.trigger('prev.owl.carousel');
});

$(".owl-next-second").click(function () {
    owl.trigger('next.owl.carousel');
});

});

$(document).ready(function() {
    $('#js-email-first, #js-email-second').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                alert("Спасибо! Уникальный промокод отправлен на Вашу почту! ");
            } else {
               alert("Введен не верный Email.");
            }
        } else {
           alert("Пожалуйста, введите Email.");
        }
    });
});

	}
});

