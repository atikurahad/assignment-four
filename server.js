const http = require("http"); 
const fs = require('fs');




const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.write("This is home Page.");
        res.end();
    }

    else if(req.url === "/about"){
        res.write("This is about Page."); 
        res.end();
    }

    else if(req.url === "/contact"){
        res.write("This is contact Page.");
        res.end();
    }

   
    else if(req.url === "/file-write"){
        fs.writeFile("demo.txt","hello world",(err)=>{

            if(err){
                console.log(err);
                res.writeHead(400,{"Content-Type":"text/html"});
                res.write("Failed to write");
                res.end();
            }
            
            else{
                res.writeHead(200,{"Content-Type":"text/html"}); 
                res.write("File Write Successfully.");
                res.end();
            }

        });
    }
   


}

);



server.listen(3000,()=>{
    console.log("Listening on port 3000");
})