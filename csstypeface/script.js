$(document).ready(function() {
$(".letter").mouseenter(function(){
    $(".small1").css({
        "width": "50px",
        "height": "50px",
        "transform": "translate(0px, 0px)",
        "transition": "1s"
        });
    $(".small2").css({
        "width": "50px",
        "height": "50px",
        "transform": "translate(0px, 0px)",
        "transition": "2s"
        });
    $(".small3").css({
        "width": "50px",
        "height": "50px",
        "transform": "translate(0px, 0px)",
        "transition": "3s"
        });

    $(".large1").css({
        "width": "20px",
        "height": "20px",
        "transform":"translate(15px, 15px)",
        "transition": "1s"
        }); 
	$(".large2").css({
        "width": "20px",
        "height": "20px",
        "transform":"translate(15px, 15px)",
        "transition": "2s"
        }); 
	$(".large3").css({
        "width": "20px",
        "height": "20px",
        "transform":"translate(15px, 15px)",
        "transition": "3s"
        }); 
    });

$(".letter").mouseleave(function(){
    $(".small1").css({
        "width": "20px",
        "height": "20px",
        "transform": "translate(15px, 15px)",
        "transition": "1s"
        });
    $(".small2").css({
        "width": "20px",
        "height": "20px",
        "transform": "translate(15px, 15px)",
        "transition": "2s"
        });
    $(".small3").css({
        "width": "20px",
        "height": "20px",
        "transform": "translate(15px, 15px)",
        "transition": "3s"
        });

    $(".large1").css({
        "width": "50px",
        "height": "50px",
        "transform":"translate(0px, 0px)",
        "transition": "1s"
        }); 
    $(".large2").css({
        "width": "50px",
        "height": "50px",
        "transform":"translate(0px, 0px)",
        "transition": "2s"
        }); 
    $(".large3").css({
        "width": "50px",
        "height": "50px",
        "transform":"translate(0px, 0px)",
        "transition": "3s"
        }); 
    });
});