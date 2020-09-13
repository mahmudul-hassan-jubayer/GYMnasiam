
// ======== fixed menu. ===========

$(window).scroll(function () {
    $scrollamount = $(window).scrollTop();

    if ($scrollamount > 600) {
        $(".menu").addClass("fixed");
    } else {
        $(".menu").removeClass("fixed");
    }

    if ($scrollamount > 1000) {
        $(".btop").fadeIn();
    } else {
        $(".btop").fadeOut();
    }

});


$(".btop").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 1000)
});


// ========slick slider========
$('#banner-part').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


// =========VenoBox=========
$('.venobox').venobox();



// ===========testimonial slide=============
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});




// company slider

$('#company-part .company-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<i class="fa fa-arrow-left previous" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<i class="fa fa-arrow-left previous" aria-hidden="true"></i>',
                nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>'
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



// =======counter=======
$('.counter').counterUp({
    delay: 10,
    time: 1000
});



// ========AOS animation Link============
AOS.init();




