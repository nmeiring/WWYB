var home = function(res){
  res.render('index', { title: 'WWYB?' });
  console.log('homepage rendered');
  //click();
};

var post = function(res) {
  res.render('posts', {title: 'Company Info'});
  console.log('post page rendered');
}


var click = function(res){
  var count = 0;
}



exports.click = click;
exports.home = home;
exports.post = post;
