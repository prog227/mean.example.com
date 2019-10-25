var express = require('express');
var Articles = require('../../models/articles');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  res.render('articles', { title: 'Articles'});
});

router.get('/', function(req, res, next) {

  Articles.find({},function(err, articles){
    if(err){
    return res.json({'success':false, 'error': err});
 }
    return res.json({'success':true, 'articles': articles});
  });
});

router.get('/:articleId', function(req,res){
  
  var articleId = req.params.articleId;
   Articles.findOne({'_id':articleId}, function(err, articles){
     if(err){
      return res.json({'success':false, 'error': err});
    }
     return res.json({'success':true, 'article': articles});
   });
 });

module.exports = router;
