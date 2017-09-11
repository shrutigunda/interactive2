$(document).ready(function(){
	
	$('#button-1').click(function() {
		$(this).animate({
			backgroundColor:'#000000'
		}, 1000 );
	});

	$('#button-2').click(function() {
		$(this).animate({
			borderRadius: '50%',
			height: '300px',
    		width: '20%'
		}, 1000 );
	});
	
	$('#button-5').click(function() {
		$(this).animate({
			fontSize: '35px',
		}, 1000 );
	});


	$('#button-6').click(function() {
		$(this).animate({
			opacity: 0.2,
		}, 1000 );
	});
	$('#button-34').click(function openWin() {
    myWindow = window.open("http://www.starwars.com/", "_blank", "width=600, height=450");
});
var myWindow;
	$('#button-40').click(function openWin() {
    myWindow = window.open("", "myWindow", "width=300,height=300");
    myWindow.document.write("<p>hehe psych</p>");
});

	$('#button-41').click(function closeWin() {
    myWindow.close();
});

$( function() {
    $( "#button-47" ).draggable();
  } );

        var counter = $('#TextBox').val();
        $('#AddButton').click( function() {
            var counter = $('#TextBox').val();
            counter++ ;
            $('#TextBox').val(counter);
    });
$('#xwing').mouseover(function(){
    $(this).addClass('xwing');
}).mouseleave(function(){
    $(this).removeClass('xwing');
});
$(document).ready(function()
{

$(".gif").hover(
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.png$/i, ".gif"));
        },
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.gif$/i, ".png"));
        });
});

$('#button-39').click(function() {
    location.reload();
});

	/*

	$('#button-4').mouseover(function() {
		$('.item').animate({
			marginLeft: '1in'
		}, 1000 );
	});*/
});