const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

app.set('view engine','hbs');
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));
app.get('/',(req,res)=>{
    res.render('home');
})
app.listen(4000,()=>{
    console.log("hello client ji");
})