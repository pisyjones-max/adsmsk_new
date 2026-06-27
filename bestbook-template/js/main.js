document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");
  });
});


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Сервис-воркер зарегистрирован с областью:", registration.scope);
      })
      .catch((error) => {
        console.error("Ошибка при регистрации сервис-воркера:", error);
      });
  });
}



// Удаление дублирующих обёрток перед созданием новой
//$('.sticky-wrapper').not(':first').remove();
// Function to equalize box heights
function equalizeHeights() {
  var tallestBox = 0;
  var serviceListBoxes = document.querySelectorAll('.service-list');

  document.querySelectorAll('.service-list').forEach(function(serviceList) {
    const tooltip = serviceList.querySelector('.tooltip');
    const textElement = serviceList.querySelector('.text-truncate');

    serviceList.addEventListener('mouseenter', function() {
        if (textElement.offsetWidth < textElement.scrollWidth) { // Если текст не помещается
            tooltip.textContent = textElement.getAttribute('data-full-text'); // Установка полного текста
            tooltip.style.display = 'block'; // Показываем попап
            const rect = textElement.getBoundingClientRect();
            tooltip.style.left = `${rect.left}px`; // Позиционируем попап
            tooltip.style.top = `${rect.bottom + window.scrollY}px`; // По вертикали
        }
    });

    serviceList.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none'; // Скрываем попап
    });
});

  // Find the tallest box
  serviceListBoxes.forEach(function(box) {
    var boxHeight = box.offsetHeight;
    if (boxHeight > tallestBox) {
      tallestBox = boxHeight;
    }
  });

  // Set all boxes to the tallest height
  serviceListBoxes.forEach(function(box) {
    box.style.height = tallestBox + 'px';
  });
}

// Call the function on page load and when the window is resized
window.onload = equalizeHeights;
window.addEventListener('resize', equalizeHeights);
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


    var element = jQuery('#style-changer');

    if( element ) {
        $.ajax({
            url: element.attr('data-src'),
            type: 'get',
            dataType: 'text',
            success: function(data) {
                var newContent = jQuery('<div>', {
                    html: data
                });

                newContent.appendTo(element);
            }
        });
    }

	
	
	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

    //-------- Active Sticky Js ----------//
     $(".sticky-header").sticky({topSpacing:0});

     $('select').niceSelect();

    // Add smooth scrolling to Menu links
     $(".nav-link, .dropdown-ct a").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top - (-10)
            }, 600, function(){
             
                window.location.hash = hash;
            });
        } 
    });

    //------- Color Changer Open --------//
    $(".changer-open").on('click', function(e) {
        e.preventDefault();
        $(".color-changer").toggleClass('toggle-changer');
    });

    //--------- Accordion Icon Change ---------//

    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".lnr-chevron-down").removeClass("lnr-chevron-down").addClass("lnr-chevron-up");

    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".lnr-chevron-up").removeClass("lnr-chevron-up").addClass("lnr-chevron-down");
    });

    //--------- Banner Content Carousel ---------//

    $('.active-banner-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    })

    //--------- Book Review Carousel ---------//

    $('.active-review-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    })
    
    $('.active-review-carousel-solid').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    })

    //--------- Book Inside Page Carousel ---------//

    $('.book-inside-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<span class="lnr lnr-arrow-left"></span>', '<span class="lnr lnr-arrow-right"></span>'],
        items: 3,
        margin: 20,
        autoHeight : true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        responsive: {
              0:{
                items:1,
                nav:false,
                autoplay:true,
                autoplayTimeout:1500,
                autoplayHoverPause:true,
                margin: 0
            },
            768:{
                items:2,
                nav: true
            },
            1000:{
                items:3,
            }
        }
    })
    $('.book-inside-carousel-solid').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<span class="lnr lnr-arrow-left"></span>', '<span class="lnr lnr-arrow-right"></span>'],
        items: 3,
        margin: 20,
        autoHeight : true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        responsive: {
              0:{
                items:1,
                nav:false,
                autoplay:true,
                autoplayTimeout:1500,
                autoplayHoverPause:true,
                margin: 0
            },
            768:{
                items:2,
                nav: true
            },
            1000:{
                items:3,
            }
        }
    })
    $('.weekly-book-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<span class="lnr lnr-arrow-left"></span>', '<span class="lnr lnr-arrow-right"></span>'],
        items: 1,
        margin: 20,
        autoHeight : true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
    })
    $('.active-more-books').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<span class="lnr lnr-arrow-left"></span>', '<span class="lnr lnr-arrow-right"></span>'],
        items: 3,
        margin: 20,
        autoHeight : true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        responsive: {
              0:{
                items:1,
                nav:false,
                autoplay:true,
                autoplayTimeout:1500,
                autoplayHoverPause:true,
                margin: 0
            },
            440:{
                items:2,
                nav: false
            },
            768:{
                items:3,
                nav: false
            },
            1000:{
                items:4,
            }
        }
    })
    $('.active-more-books-solid').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<span class="lnr lnr-arrow-left"></span>', '<span class="lnr lnr-arrow-right"></span>'],
        items: 3,
        margin: 20,
        autoHeight : true,
    	autoplayTimeout:1500,
    	autoplayHoverPause:true,
    	animateOut: 'fadeOut',
    	responsive: {
    		  0:{
                items:1,
                nav:false,
                autoplay:true,
                autoplayTimeout:1500,
                autoplayHoverPause:true,
                margin: 0
            },
            440:{
                items:2,
                nav: false
            },
            768:{
                items:3,
                nav: false
            },
            1000:{
                items:4,
            }
    	}
    })

    $('.gallery').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true,
         preload: [0,2], // read about this option in next Lazy-loading section

          navigateByImgClick: true,

          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

          tPrev: 'Previous (Left arrow key)', // title for left button
          tNext: 'Next (Right arrow key)', // title for right button
          tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
    });

    // -------   Mail Send ajax

    $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.html(''); // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });


    //--------- Active Video Play -----------//
    $(".play-btn").magnificPopup({
        type: 'iframe',
        patterns: {
            youtube: {
                index: 'youtube.com',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
        }
    });


    });
    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });