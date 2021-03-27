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
const port = 4000 || process.env.PORT;
app.listen(port,()=>{
    console.log("hello client ji");
})