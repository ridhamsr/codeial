const router = require("../routes/users");

module.exports.profile = function (req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    });
}


// module.exports =router;