$(document).ready(function() {
    $(".mask").hide();
    $(".gallery").hide();
    $(".gallery-image").hide();
    
    var img = 1;

    $("#img1").click(function() {
        img = 1;
        $(".mask").fadeIn(500);
        $(".gallery").fadeIn(500);
        $("#img-1").fadeIn(500);
    });
    
    $("#img2").click(function() {
        img = 2;
        $(".mask").fadeIn(500);
        $(".gallery").fadeIn(500);
        $("#img-2").fadeIn(500);
    });

    $("#img3").click(function() {
        img = 3;
        $(".mask").fadeIn(500);
        $(".gallery").fadeIn(500);
        $("#img-3").fadeIn(500);
    });

    $("#left-arrow").click(function() {
        switch(img) {
            case 1:
                img = 3;
                $("#img-1").fadeOut(500, function() {
                    $("#img-3").fadeIn(500);
                });
                break;
            case 2:
                img = 1;
                $("#img-2").fadeOut(500, function() {
                    $("#img-1").fadeIn(500);
                });
                break;
            case 3:
                img = 2;
                $("#img-3").fadeOut(500, function() {
                    $("#img-2").fadeIn(500);
                });
                break;
        }
    });

    $("#right-arrow").click(function() {
        switch(img) {
            case 1:
                img = 2;
                $("#img-1").fadeOut(500, function() {
                    $("#img-2").fadeIn(500);
                });
                break;
            case 2:
                img = 3;
                $("#img-2").fadeOut(500, function() {
                    $("#img-3").fadeIn(500);
                });
                break;
            case 3:
                img = 1;
                $("#img-3").fadeOut(500, function() {
                    $("#img-1").fadeIn(500);
                });
                break;
        }
    });

    $(".close-gallery").click(function() {
        $(".mask").fadeOut(250);
        $(".gallery").fadeOut(250);
    });

});