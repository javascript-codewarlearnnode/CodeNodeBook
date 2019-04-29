var show_result = document.querySelector('#show_result');
//sidenav: sticky-top
$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 100) {
        $("aside").addClass("stick position-fixed");
        $("aside").removeClass("position-absolute");
    } else {
        $("aside").removeClass("stick position-fixed");
        $("aside").addClass("position-absolute");
    }
})
//回到頁面頂端
$("#goTop").click(function () {
    //animate無法加在window上，故此處需加在html上
    $("html").animate({
        scrollTop: 0
    }, 400)
});
//Link選單開合
$("#Links").click(function () {
    if ($(this).hasClass("show")) {
        $(this).removeClass("show");
        $("#LinkList").removeClass("active");
        $("#arrowicon").removeClass("active");
    } else {
        $(this).addClass("show");
        $("#LinkList").addClass("active");
        $("#arrowicon").addClass("active");
    }
})
//版本version光箱
lightbox.option({
    //'resizeDuration': 200,
    'wrapAround': true, //在最後一張照片時，點擊下一頁可回到第一張
    albumLabel: "第 %1 張 ， 共 %2 張"
})