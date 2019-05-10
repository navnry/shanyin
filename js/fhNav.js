$(".fhNav").hover(function () {
}, function () {
    $(".bottomLine").css("width", parseFloat($(".active").eq(0).width() + 20) + "px");
    $(".bottomLine").css("left", parseFloat($(".active").eq(0)[0].offsetLeft) + "px");
})
$(".nav li").hover(function () {
    $(".bottomLine").css("width", parseFloat($(this).width() + 20) + "px");
    $(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft) + "px");
});
$(".nav li").on("click", function () {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
    $(".bottomLine").css("width", parseFloat($(this).width() + 20) + "px");
    $(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft) + "px");
})
