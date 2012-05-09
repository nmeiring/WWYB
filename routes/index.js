
/*
 * GET home page.
 */
var $ = require('jQuery');


var home = function(req, res){
  res.render('index', { title: 'WWYB?' });
  console.log('hello world');
  click();
};

var post = function(req, res) {
  res.render('posts', {title: 'Company Info'});
}


var click = function(req, res){
  var count = 0;
  console.log(count);
  $('.upvoteIMG').on('click', count++);
  count++
  console.log(count);
}


exports.click = click;
exports.home = home;
exports.post = post;