//for trasparent and solid on scroll
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $("nav").addClass("no-transparent");
        } else {
            $(".navbar").removeClass("no-transparent");
        }
    });
});

//for water ripple effect on banner
jQuery(document).ready(function() {
    "use strict";

    $(".jumbotron").ripples({
        dropRadius: 10,
        perturbance: 0.0
    });
});

//for Skills

(function($) {
    "use strict";
    //when dom is ready start
    $(document).ready(function() {

        $('.progress-bar').each(function() {

            var width = $(this).data('percent');
            $(this).css({
                'transition': 'width 3s'
            });

            $(this).appear(function() {
                console.log('hello');
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50,
                });
            });

        });

    });
    //when dom is ready end
})(jQuery);


//for contact form
$(".js-input").keyup(function() {
    if ($(this).val()) {
        $(this).addClass("not-empty");
    } else {
        $(this).removeClass("not-empty");
    }
});

//for preloader
(function($) {
    "use strict";
    $(window).on("load", function() {
        if ($(".pre-loader").length > 0) {
            $(".pre-loader").fadeOut("slow");
        }
    });
})(jQuery);

//for smooth scroll

$(document).ready(function() {
    // Add smooth scrolling to all links
    jQuery(".nav-item a").on("click", function(event) {
        var target = jQuery(this);
        var element = target.attr("href");

        jQuery(".nav-item a").removeClass("active");
        target.addClass("active");

        jQuery("body, html").animate({
                scrollTop: jQuery(element).offset().top - 75
            },
            800
        );
    });
});