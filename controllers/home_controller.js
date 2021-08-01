// const router = require("../routes/users");
module.exports.home = function(req,res){

    return res.render('home', {
        title: "Home"
    });
}