

const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log('in the middleware');
    res.send({key1:'value'});
    next();
})
app.use((req,res,next)=>{
    console.log('in another middleware');
    
})

app.listen(3000);
