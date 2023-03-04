//fisrt of all we will import http module -
const http = require('http');
const port = 8000;

//function passing while running the server it will return the url -
function requestHandle(req,res){
    console.log(req.url);
    // tell the server some sort of additional information like what type of data is gonna come syntax response code/type of data , you can check this information in inspect section -
    res.writeHead(200,{'content-type': 'http/html'})

    //show in httpage when req will end
    res.end('<h1>Gocha !!! </h1>');
};

//creating the server -
const server = http.createServer(requestHandle);

//listen command to check whether the server is working fine or Not
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port :",port);
})