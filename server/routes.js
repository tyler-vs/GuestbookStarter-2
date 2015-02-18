//pull in our controllers
var home = require('../controllers/home');
var comment = require('../controllers/comment');

module.exports.initialize = function(app, router) {
    //handles browser requests for content
    app.get('/', home.index);
    app.get('/comments', comment.index);
    //handles post routes (like a form submission)
    app.post('/comments', comment.create);
    
    app.use('/', router);
};