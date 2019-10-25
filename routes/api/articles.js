var express = require('express');
var Articles = require('../../models/articles');
var router = express.Router();

router.get('/', function(req, res, next) {

  Articles.find({},function(err, articles){
    if(err){
    return res.json({'success':false, 'error': err});
 }
    return res.json({'success':true, 'articles': articles});
  });
});


module.exports = router;
