var express = require('express');
var feature3 = require('../model/feature3.js');
var feature4 = require('../models/feature4');
var f1 = require('../model/featureF1');
var router = express.Router();

var myRouter = function (req, res, next) {
  const response = getResponse(req);
  console.log(response);
  res.send({...response, feature4: feature4.whatsMyName()} );
}

router.use('/:apiName?', myRouter);

function getResponse(params){
  return({
    params: {
      ...params.params
    },
    query: {
      ...params.query
    },
    reqMethod: params.method || null,
    feature3: feature3.result,
    f1: f1
  });
}

  
module.exports = router;
