$(document).ready(function() {

$("#one").mouseenter(function(){
    $("body").css({
        "background": "-moz-linear-gradient(bottom right, #f8b195, #f67280, #c06c84, #6c5b7b, #355c7d)",
        "background": "linear-gradient(to bottom right, #f8b195, #f67280, #c06c84, #6c5b7b, #355c7d)",
        "-webkit-transition" : "background 2s",
   		"transition": "background ease 2s"
        });
    });

$("#two").mouseenter(function(){
    $("body").css({
        "background": "-moz-linear-gradient(bottom right, #355c7d, #f8b195, #f67280, #c06c84, #6c5b7b)",
        "background": "linear-gradient(to bottom right, #355c7d, #f8b195, #f67280, #c06c84, #6c5b7b)"
        
        });
    });

$("#three").mouseenter(function(){
    $("body").css({
        "background": "-moz-linear-gradient(bottom right, #6c5b7b, #355c7d, #f8b195, #f67280, #c06c84)",
        "background": "linear-gradient(to bottom right, #6c5b7b, #355c7d, #f8b195, #f67280, #c06c84)"
        
        });
    });

$("#four").mouseenter(function(){
    $("body").css({
        "background": "-moz-linear-gradient(bottom right, #c06c84, #6c5b7b, #355c7d, #f8b195, #f67280)",
        "background": "linear-gradient(to bottom right, #c06c84, #6c5b7b, #355c7d, #f8b195, #f67280)"
        
        });
    });

$("#five").mouseenter(function(){
    $("body").css({
        "background": "-moz-linear-gradient(bottom right, #f67280, #c06c84, #6c5b7b, #355c7d, #f8b195)",
        "background": "linear-gradient(to bottom right, #f67280, #c06c84, #6c5b7b, #355c7d, #f8b195)"
        
        });
    });


$("#bio").hide();
$("#quote").show();

$("#artist").mouseenter(function(){
    $("#bio").show(3000);
    $("#quote").css({
    	"color": "transparent",
    	"transition": "color 3s"
    });
    });

$("#artist").mouseleave(function(){
    $("#bio").hide(3000);
    $("#quote").css({
    	"color": "white",
    	"transition": "color 3s"
    });
    });

$("#info").hide();

$("#name").mouseenter(function(){
    $("#info").show(3000);
    $("#quote").css({
    	"color": "transparent",
    	"transition": "color 3s"
    });
    });
$("#name").mouseleave(function(){
    $("#info").hide(3000);
    $("#quote").css({
    	"color": "white",
    	"transition": "color 3s"
    });
    });

$('#quote a').okshadow({
  color: 'white',
  textShadow: true,
  transparent: true,
  xMax: 0,
  yMax: 0,
  fuzzMin: 0,
  fuzz: 30
});

$("#spot").okshadow({
	color:'white',
	xMax: 500,
	yMax: 500,
	xFactor:1,
	yFactor:1,
	fuzzMin:10000,
	fuzz: 10000
});

$("#spotlight").css({
	"opacity":"0"
});

$("#appear").mouseenter(function(){
	$("#spotlight").css({
		"opacity": "1",
		"transition": "opacity 3s"
	});
});

$("#appear").mouseleave(function(){
	$("#spotlight").css({
		"opacity": "0",
		"transition": "opacity 1s"
	});
});

/*
$(function(){
	$("#boop").okshadow({
		color: 'rgb(255, 0, 0)',
		fuzzMin: '300',
		fuzzMax: '1500',
		fuzzFactor: '1'
	});
});*/

});