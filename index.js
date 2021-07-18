const express = require ('express');
const app =express();
const port = 8000;

app.use('/',require('./routes')) //used express routes

app.listen(port, function(err){
    if(err){
        console.log(`Error : ${port} `);  // interpolation
    }
    console.log(`Server is runiing on port : ${port}`);
        
})

