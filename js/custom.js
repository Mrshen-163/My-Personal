window.onload = function () {
    $("#menu.menu").niceScroll();
    $("#menu-toggle").click(function () {
        $("#menu").toggleClass('open');
        $("#menu-toggle").css("display", "none");
    })
    $("#menu-close").click(function () {
        $("#menu").toggleClass('open');
        $("#menu-toggle").css("display", "inline-block");
    })
    $("#menu-links a").click(function () {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });

    function redirect(target) {
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, {duration: 500, easing: "swing"});
    }

    $("a.about").click(function () {
        redirect("#about");
    });
    $("a.service").click(function () {
        redirect("#service");
    });
    $("a.my-case").click(function () {
        redirect("#my-case");
    });
    $(window).on('scroll', function () {

        var divPosition = $('#service').offset().top;
        var currentPosition = $(window).scrollTop();
        if (currentPosition < 1110) {
            $('a.about').parent().addClass('active');
            $('a.about').parent().siblings().removeClass('active');
        }
        if (currentPosition > 1110 - 10) {
            $('a.service').parent().addClass('active');
            $('a.service').parent().siblings().removeClass('active');
        }
        if (currentPosition > 2070 - 10) {
            $('a.my-case').parent().addClass('active');
            $('a.my-case').parent().siblings().removeClass('active');
        }

    })


    $(".my-case .row").each(function () {
        var $isotope = $(".isotope-box");
        var $filterCheckboxes = $('input[type="radio"]');

        var filter = function () {
            var type = $filterCheckboxes.filter(":checked").data("type") || "*";
            if (type !== "*") {
                type = '[data-type="' + type + '"]';
            }
            $isotope.isotope({filter: type});
        };

        $isotope.isotope({
            itemSelector: ".isotope-item",
            layoutMode: "masonry"
        });

        $(this).on("change", filter);
        filter();
    });

}

