const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
console.log('request has been made from browser to server');
// console.log(req.method);
// console.log(req.url);
res.setHeader('Content-Type','text/plain');
res.write('<h1> Hello, Pepcoders! </h1>');
res.write('<h2> How r you </h2>'); 
res.end();
// let path='./views';
// switch(req.url){
//     case '/':
//         path='/indexx.html'
//         break;
//         case '/about':
//             path='/abt.html'
//             break;
//             default:
//                 path='/404.html'
//                 break;
// };
// fs.readFile('./views/index.html',(err,fileData)=>{
//      if(err){
//         console.log(err);
//      }
// else{
//     res.write(fileData);
//     res.end();


// })
// });
//part number, host, callback func
server.listen(3000, 'localhost',()=>{
    console.log('server is listening on port 3000');
}); 