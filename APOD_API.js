function displayImage(data){
    $('<img>',{
        src:data.url
        heigth: '100%',
        width: '100%'
    }).appendTo('#image-container');
}

$.ajax({
    url:'https://random.imagecdn.app/500/150',
    method:'GET',
    success:displayImage
});