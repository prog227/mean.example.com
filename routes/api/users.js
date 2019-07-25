var express = require('express');
var Users = require('../../models/users');
var router = express.Router();

router.get('/', function(req, res, next) {
  Users.find({},function(err, users){
    if(err){
     return res.json({'success':false, 'error': err});
   }
    return res.json({'success':true, 'users': users});
  });
});

module.exports = router;
