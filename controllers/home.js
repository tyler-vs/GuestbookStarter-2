//takes the browser's request and lets us send back a page or other information
var commentModel = require('../models/comment');

module.exports = {
	//*****render the index	

    // res.render
    // function index(req, res){
    //     res.render('index');   // param in here.
    // }

    index: function(req, res){
        res.render('index');

        /*var viewModel = commentModel.find(function(err, comments) {
            if (err) {console.log('seems there was an error + ' + err)};
            res.render('index', {"comments": comments});
        });*/
    }
};