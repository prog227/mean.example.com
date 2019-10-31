var express = require('express');
var articles = require('../../models/articles');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log(req.session);
//   res.render('articles', { title: 'Articles'});
// });

router.get('/', function(req, res, next) {

  articles.find({},function(err, articles){
    if(err){
    return res.json({'success':false, 'error': err});
 }
    return res.json({'success':true, 'articles': articles});
  });
});

router.get('/:id', function(req,res){
  
  var id = req.params.id;
   articles.findOne({'_id':id}, function(err, article){
     if(err){
      return res.json({'success':false, 'error': err});
    }
     return res.json({'success':true, 'article': articles});
   });
 });

router.post('/', function(req, res) {
  articles.create(new articles({
    title: req.body.title,
    description: req.body.description,
    keywords: req.body.keywords,
    body: req.body.body,
    published: req.body.published
  }), function(err, article){
    
    if(err){
      return res.json({success: false, article: req.body, error: err});
    }

    return res.json({success: true, article: article});
    
  });
});

 router.put('/', function(req, res){

   articles.findOne({'_id': req.body._id}, function(err, article){

    if(err) {
      return res.json({success: false, error: err});
    }

    if(article) {

     let data = req.body;

     if(data.title){
       article.title = data.title;
     };

     if(data.description){
     article.description = data.description;
     };

     if(data.keywords){
     article.keywords = data.keywords;
     };

     if(data.body){
     article.body = data.body;
     };
     
     if(data.published){
       article.published = data.published;
       article.offset = new Date(data.published).getTimezoneOffset();
     }

     article.save(function(err){
       if(err){
         return res.json({success: false, error: err});
       }else{
         return res.json({success: true, article:article});
       }
     });

    }

   });
  
 });

 router.delete('/:articleId', function(req,res){

  var articleId = req.params.articleId;

  articles.remove({'_id':articleId}, function(err,removed){

    if(err){
      return res.json({success: false, error: err});
    }

    return res.json({success: true, status: removed});

  });

});

module.exports = router;
