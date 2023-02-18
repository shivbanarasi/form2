
const fs=require('fs');
var fs1=require('fs');

const localhost=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        fs1.readFile('message.txt',{encoding:'utf8'},(err,data)=>{
          res.write('<html>')
          res.write('<head><title>Enter Massage</title></head>');
          res.write('<body>');
         
          res.write(`<p >message :  ${data.toString()}</p>`)  
          
          res.write('<form action="/message" method="POST">')
          res.write('<input type="text" name="massage">')
          res.write('<button type="submit">send</button></form></body>') 
          res.write('</html>');
          return res.end();
        })
        
        
      }
      if(url==='/message'&& method==='POST'){
        const body=[];
        req.on('data',chunk=>{
          console.log(chunk.toString());
          body.push(chunk);
        });
        return req.on('end',()=>{
          const parseBody=Buffer.concat(body).toString();
          const message=parseBody.split('=')[1];
          fs.writeFile('message.txt',message,err=>{
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
          });
        });
      }
}


module.exports={
    handler:localhost,
};