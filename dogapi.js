// function fetchRandomDogImage(){

//     var xhrRequest =new XMLHttpRequest();
//     // type of request,api link , true/false type of json request ascym or synchr ,by default asycn true also mean asycn
//     xhrRequest.onload = function(){
//         console.log(xhrRequest.response);
//         // coverting the string into json format
//         var responseJSON = JSON.parse(xhrRequest.response);
//         var imageURL = responseJSON.message;
//         $('#dog-image').attr('src',imageURL);
//     };
//     xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true)
//     xhrRequest.send();

// }

// same request using jquer and ajax - write less and do more -
/*
$.get('https://dog.ceo/api/breeds/image/random',function(data){
    var imageURL = data.message;
    $('#dog-image').attr('src',imageURL);
})
*/

$.get('https://dog.ceo/api/breeds/image/random',function(data){
    var imageURL = data.message;
    $('#dog-image').attr('src',imageURL);
}).fail(function(xhr,textStatus,errorThrown){
    console.log("Request Failed");
});




$('#fetch-dog-image-buttom').click(fetchRandomDogImage);