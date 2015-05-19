//librerias
var http = require("http");
var path = require("path");
var filesystem = require("fs");

function requestEvent(req, res){
	
   
    var resource = req.url;
    var extention = path.extname(resource);
    
    if(resource === "/"){
        resource = "/index.html";
    }
	
    resource = "."+resource;  

    switch(extention){
    	case ".css":
       		contentType = "text/css";
        	break;
    	case ".js":
        	contentType = "text/javascript";
        	break;
	default:
		contentType = "text/html";		
    }

    fs.exists(recurso,function(exist){
        if(exist){
            fs.readFile(recurso,function(err,data){
                if(err){
                    res.writeHead(500);
                    res.end("Internal Error");
                }else{
                    res.writeHead(200,{"content-type":contentType});
                    res.end(data);
                }              
  
            });

        }else{
            res.writeHead(404);
            res.end("Not Found");
        }
    });
_
