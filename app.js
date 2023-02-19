const express=require('express');
const bodyparser=require('body-parser')
const app=express();

app.use(bodyparser.urlencoded())

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input typt="text" name="title"><input typt="text" name="number"><button type="submit">add product</button><form>')
});

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>this is redirected page</h1>')
})

app.listen(3000);