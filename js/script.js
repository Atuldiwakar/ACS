$(document).ready(function() {
    //...
    $(".menus li a").click(function(e) {
        // how to proceed
        let target = $(this).attr("href");

        $("html,body").animate({
            scrollTop: $(target).offset().top - 300,

        }, 2500);

        e.preventDefault();
    });
});