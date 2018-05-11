
// function autoResizeDiv() {
//     document.getElementById('header').style.height = window.innerHeight + 'px';
// }
// window.onresize = autoResizeDiv;
// autoResizeDiv();

// Preload Code
$(window).load(function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
})

var mixer = mixitup('#gallery', {
    selectors: {
        target: '.gallery-item'
    }
});

// BF Gallery Slideshow Code
$(document).ready(function () {
    // assign captions from title-attributes:
    $("[data-fancybox]").each(function () {
        $(this).attr("data-caption", $(this).attr("title"));
    });
    // start fancybox on all elements with attribute 'data-fancybox':
    $("[data-fancybox]").fancybox();
});

$(function () {
    $("#vidLinks a").click(function () {
        $("#modal").fadeIn(1000)
    });
    $("#modal span").click(function () {
        $("#modal").fadeOut();
        $("#mainVid").attr("src", "")
    })
})
// $(document).ready(function () {
//     $('.popup-youtube').magnificPopup({
//         disableOn: 700,
//         type: 'iframe',
//         mainClass: 'mfp-fade',
//         removalDelay: 160,
//         preloader: false,

//         fixedContentPos: false
//     });
// });

