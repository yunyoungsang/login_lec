// 모듈을 불러온다.
const express=require('express');
const app=express();

// 라우터를 사용하기 위해 불러온다.
const home = require('./src/routes/home');

app.set('view engine', 'ejs');
app.set('views', './src/views');


app.use("/",home); // middleware

module.exports=app;