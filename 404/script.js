$(document).ready(function() {

$(".item, .item2").mouseenter(function(){
    $(".item").css({
        "border-width": "0 17px 370px 17px",
        "border-color": "transparent transparent #2172ff transparent",
        "transition": "5s"
        });
    $(".item2").css({
        "border-width": "370px 17px 0 17px",
        "border-color": "#2172ff transparent transparent transparent",
        "transition": "5s"
        });
    $(".row").css({
        "width":"238",
        "transition": "5s",
        
        });
    });

});