$(document).ready(function () {
    $("#owl-example").owlCarousel({
        items: 1,
        autoPlay: true,
        navigation: true,
        navigationText: [`<i class="fa-solid fa-angle-left"></i>`, `<i class="fa-solid fa-angle-right"></i>`],
    });
    $("#owl-example1").owlCarousel({
        items: 5,
       
        autoPlay: true,
        pagination : false,
       
    });
    //Banner auto slide
    // var index = 0;
    // setInterval(function () {
    //     var arrBanner = ["./image/banner1.jpg", "./image/banner2.jpg", "./image/banner3.jpg", "./image/banner4.jpg"]
    //     $('.img-banner').attr("src", arrBanner[index]);
    //     index++;
    //     if (index == 3) {
    //         index = 0;
    //     }
    // }, 5000)
    //hover navbar
    $(".navbar-item").hover(function (e) {
        $(this).children(".nav-item-listText").css("display", "flex")

    }, function () {
        // out
        $(this).children(".nav-item-listText").css("display", "none")
    }
    );

    //slide click

    // rightClick.click(function () {
    //     $('.listImg').css = `width:2000px`
    //     index++
    // })
    // leftClick.click(function () {

    // })
});



