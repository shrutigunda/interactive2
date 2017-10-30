


$(document).ready(function() {
var $small1 = $(".small1");
var animSwitch = 0;

function scroll() {
  var height = '20px';
  var width = '20px';
  var transform = 'translate(15px, 15px)';
  
  if (!animSwitch) {
    height = '50px';
    width = '50px';
    transform = 'translate(0px, 0px)';
    animSwitch = 1;
  }
  else {
    animSwitch = 0;
  }
    
    $small1.css({
        "width": width,
        "height": height,
        "transform": transform,
        "transition": "1s"
        },
        {
        complete: function() {
            scroll(); //repeat
            }
        }
  )

};
scroll(); //call function to begin loop
});
