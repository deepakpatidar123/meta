const http = require("http")

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(5000);

// const http=require("http")
// const fs=require("fs")

// const server=http.createServer((request, response)=>{
//     if(request.url==="/"){
//         response.end("HOME PAGE")
//     }else if(request.url==="/data"){
//      fs.readFile("./data.json",(err,data)=>{
//         if(err){
//             response.write(err)
//             response.end()
//         } else{
//             response.end(data)
//         }
//      })
     
//     }else if(request.url==="/reports"){
//         response.setHeader("Content-type", "text/html")
//         response.end("<h2>Reports</h2>")
    
//     }else{
//         response.end("Invalid End Point")
//     }
// })


// server.listen(4500,()=>{
//     console.log("The server is run at port 4500")
// })
    
    
    


