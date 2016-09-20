$(function () {


    $('.video').get(0).play();
    $('.video').on('ended', function () {
        var wh = jQuery(window).scrollTop();
        if (wh == 0) {
            wh = jQuery("body").scrollTop();
        }

        if (wh == 0) {
            $("html,body").animate({
                scrollTop: 1500
            });
        }

    });

});

$(function () {
    $('.scroll-m').click(function () {
        var n = window.location.href.slice(window.location.href.indexOf('?') + 4);
        var p = $("#prof").offset().top;
        $("html,body").animate({
            scrollTop: p
        });
    })
})

$(function () {
    $('.allitem-m').click(function () {
        $('.product').hide("slow");
        $('.UI').hide("slow");
        $('.graphic').hide("slow");
        $('.others').hide("slow");
        $('.product').show("slow");
        $('.UI').show("slow");
        $('.graphic').show("slow");
        $('.others').show("slow");
    });
});

$(function () {
    $('.product-m').click(function () {
        $('.product').hide("slow");
        $('.UI').hide("slow");
        $('.graphic').hide("slow");
        $('.others').hide("slow");
        $('.product').show("slow");
        $('.UI').hide("slow");
        $('.graphic').hide("slow");
        $('.others').hide("slow");
    });
});

$(function () {
    $('.UI-m').click(function () {
        $('.product').hide("slow");
        $('.UI').hide("slow");
        $('.graphic').hide("slow");
        $('.others').hide("slow");
        $('.product').hide("slow");
        $('.UI').show("slow");
        $('.graphic').hide("slow");
        $('.others').hide("slow");
    });
});

$(function () {
    $('.graphic-m').click(function () {
        $('.product').hide("slow");
        $('.UI').hide("slow");
        $('.graphic').hide("slow");
        $('.others').hide("slow");
        $('.product').hide("slow");
        $('.UI').hide("slow");
        $('.graphic').show("slow");
        $('.others').hide("slow");
    });
});

$(function () {
    $('.others-m').click(function () {
        $('.product').hide("slow");
        $('.UI').hide("slow");
        $('.graphic').hide("slow");
        $('.others').hide("slow");
        $('.product').hide("slow");
        $('.UI').hide("slow");
        $('.graphic').hide("slow");
        $('.others').show("slow");
    });
});