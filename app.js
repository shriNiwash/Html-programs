const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;


//static path configuration
const staticPath = path.join('__dirname',"../public");
app.use(express.static(staticPath));

//configuring view engine
app.set('view engine','hbs');
app.set('views', 'views');


//routing set up

app.get("/",(req,res)=>{
    res.render('index');
});


app.get("/about",(req,res)=>{
    res.render('about');
});


app.get("/contact",(req,res)=>{
    res.render('contact');
});



//Rendering application on the local host 3000

app.listen(port,()=>console.log(`The Application is running on the port ${port}`));