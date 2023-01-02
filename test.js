
//server creation
//1.http module

const http=require('http');

const server=http.createServer((req, res)=>{
    console.log('deepak')
})

server.listen(4000, 'localhost',()=>{
    console.log('server is listening on port 4000');
});