

const http=require('http');
const server= http.createServer((req,res)=>{
    res.end('deepak')
    console.log('deepak')
    // res.end('deepak')
    // console.log('deepak')


    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>Hello form my Node.js Server!</h1></body>');
    // res.write('</html');
    // res.end();


    const url=req.url;
    if(url==="/home"){
        res.write("<html>");
        res.write("<head><title>Home</title></head>");
        res.write("<body><h1>Wellocome home</h1></body>");
        res.write("</html>");
        res.end();
    } 
    if(url==="/about"){
        res.write("<html>");
        res.write("<head><title>about</title></head>");
        res.write("<body><h1>Welcome About Us page</h1></body>");
        res.write("</html>");
        res.end();
    }
    if(url==="/node"){
        res.write("<html>");
        res.write("<head><title>Node</title></head>");
        res.write("<body><h1>Welcome to my Node Js project</h1></body>");
        res.write("</html>");
        res.end();
    }
});
server.listen(4000);