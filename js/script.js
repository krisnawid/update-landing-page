// Navbar scroll
$(document).ready(function() {
	$(window).scroll(function() {
        if($(document).scrollTop() > 200) {
            $('#navbar').addClass('scroll');
        }
        else {
        $('#navbar').removeClass('scroll');
        }
    });
    $(window).scroll(function () {
        onScrollHandle();
    });

    function onScrollHandle() {
        //Get current scroll position
        var currentScrollPos = $(document).scrollTop();

        //Iterate through all node
        $('.navbar-nav > .nav-item > a').each(function () {
            var curLink = $(this);
            var refElem = $(curLink.attr('href'));
            //Compare the value of current position and the every section position in each scroll
            if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                //Remove class active in all nav
                $('.navbar-nav > .nav-item > a').removeClass("active");
                //Add class active
                curLink.parent().addClass("active");
            }
            else {
                curLink.parent().removeClass("active");
            }
        });
    }
});

// active menu
$(document).ready(function(){
    $('.navbar-nav .nav-item').click(function(){
        $('.nav-item').removeClass("active");
        $(this).addClass("active");
    });
});

// Smooth scroll to hash link
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
            return false;
            } else {
            $target.attr('tabindex','-1');
            $target.focus();
            };
        });
        }
    }
});

