const http = require("http");
const fs=require('fs');
const { buffer } = require("stream/consumers");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method= req.method;
  const body=[];
  if (url === "/") {
    fs.readFile("message.txt",{encoding: "utf-8"},(err, data)=>{
      if(err){
        console.log(err);
      }
      res.write("<html>");
      res.write("<head><title>Emter Message</title></head>");
      res.write(`<body>${data}</body>`)
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">sent</buttom></form></body>'
        );
        res.write('</html>');
        return res.end();
      })
      }
      else if(url==="/message" && method==="POST"){
        req.on('data',(chunk)=>{
        // console.log(chunk)
        body.push(chunk)
      })

      return req.on('end',()=>{
        const parsedbody=Buffer.concat(body).toString();
        // console.log(parsedbody)
        const message=parsedbody.split('=')[1];
        fs.writeFile('message.txt',message,(err)=>{
          res.statusCode=302;
          res.setHeader('Location','/')
          // res.write('fs')
          return res.end();
        });
      })
  }
});

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
    
    
    


