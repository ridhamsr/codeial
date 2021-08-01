const express = require ('express');
const app =express();
const port = 8000;

const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//for static files
app.use(express.static('./assets'));
//use express router
app.use('/',require('./routes')) //used express routes

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port, function(err){
    if(err){
        console.log(`Error : ${port} `);  // interpolation
    }
    console.log(`Server is runiing on port : ${port}`);
        
})

