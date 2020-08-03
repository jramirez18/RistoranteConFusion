$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 })
    //activando el boton de pausa
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });



    $("#loginBtn").click(function () {
        $("#loginModal").modal("show");
    });
    $("#cancelLoginBtn").click(function () {
        $("#loginModal").modal("hide");
    });
    $("#reserveBtn").click(function () {
        $("#reserveModal").modal("show");
    });
    $("#cancelBtn").click(function () {
        $("#reserveModal").modal("hide");
    });
    $(".close").click(function () {
        $("#reserveModal").modal("hide");
    });
    $(".close").click(function () {
        $("#loginModal").modal("hide");
    });
});