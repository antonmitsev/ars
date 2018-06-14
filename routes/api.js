var express = require('express');
var router = express.Router();

router.get('/:apiName?', function (req, res) {
  res.send({...req.params, ...req.query});
});
  
module.exports = router;
