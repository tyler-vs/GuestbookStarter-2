var fs = require('fs');
var path = require('path');
var Models = require('../models');

module.exports = {
	index: function(req, res) {
		//find comments and send them as a viewmodel
        // grabs all from db and sends it to our `comments` view`
        var viewModel = Models.Comment.find( function(err, comments){
            res.render('comments', {'comments': comments}); // seting an object.
        });

	},
	create: function(req, res) {
		//save a new comment

        var saveComment = function() {
                // gets comments page
                // after posting a comment.
                var newComment = new Models.Comment({
                                comment: req.body.comment,  // refers to form box w/ form.
                                name: req.body.name
                            });
                //saves the image
                newComment.save(function(err, comment) {    // comment <- image
                    console.log('we saved a comment!');
                    res.redirect('/comments');
                });
        }
        saveComment();
	}
};