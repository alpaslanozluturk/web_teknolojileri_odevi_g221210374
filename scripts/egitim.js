$(document).ready(function() {
    // Hide all education entries initially
    $('.education-entry').hide();

    // Function to check if an element is in viewport
    function isInViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    // Show an education entry if it's in the viewport
    function showInViewport() {
        $('.education-entry').each(function() {
            if (isInViewport(this)) {
                $(this).fadeIn();
            }
        });
    }

    // Show any education entries already in viewport
    showInViewport();

    // Check for new education entries in viewport whenever the user scrolls
    $(window).scroll(showInViewport);
});