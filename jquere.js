/*

changing the html from js -
var para1 = document.getElementById('para');
para1.innerHTML = "Welcome";

changing innner text using jquere -
$('para').html('Welcome')

$('p').html('welcome');

*/

// we are creating a document fir write all the jquere inside that only -

$(document).ready(function () {
  //jquere code goes here -

  // double click -
  $("p").dblclick(function () {
    alert("The paragraph was double-clicked");
  });

  // while clicking -
  $("p").click(function () {
    console.log("you clicked on p", this);
    // $(this).hide();
  });

  // mouse entered event -
  $("p").mouseenter(function () {
    console.log("mouse event");
    console.log("you entered : ", this);
  });

  $("p").hover(function () {
    console.log("mouse event");
    console.log("you hover on  : ", this);
    // $(this).hide();
  });
});

// this will decrease the opacity to 0.3 in 2sec
$('#wiki').animate({
    opacity:0.3,
    height: '150px',
    width : '350px',

},2000);

/*
demoing the on method - with the help of on function we can write multiple event function
What is on () in jQuery?
The on() method attaches one or more event handlers for the selected elements and child elements.
*/

$("p").on({
  click:function() {
    console.log("thanks for clicking", this);
  },
  mouseleave: function () {
    console.log("mouseleve");
  },
});

// hide and show - 

$("#wiki").hide(1000,function(){
    console.log("content has been hidden by Now !!! ")
}); //take 1sec to hide the content

$("#wiki").show(1000,function(){
    console.log("content has been come back by Now !!! ")
});
$("#wiki").slidetoggle(1000,function(){
    console.log("toggle the content")
});


$('#btn').click(function(){
    $('#para').fadeOut(1000, function(){
      console.log("fade out")
 })
})

$('#btn').click(function(){
  $('#para').fadeIn(1000, function(){
        console.log("fade in")
  })
})

$('#btn').click(function(){
$('#para').fadeToggle(1000, function(){
    console.log("fade toggle")
})
})










/*
How do you toggle slideUp and slideDown in jQuery?
The slideToggle() method toggles between slideUp() and slideDown() for the selected elements. This method checks the selected elements for visibility. slideDown() is run if an element is hidden. slideUp() is run if an element is visible - This creates a toggle effect.

$('*').click() // click on all the selector

<!-- there are 3 type of selector in jquere
1.element selector
2.id selector
3.class selector

    1.element selector
    $('p').click();

    2.ID selector
    $('p').click();

    3.class selector
    $('.odd').click();

we have to write all the code inside the document wali file good practise-
cdn jqure google file -
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script> 

*/
