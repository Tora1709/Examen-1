var express = require('express');
var router = express.Router();
var propertiesController = require('./properties.controller.js');

router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});

//Declaracion de las rutas

router.route('/properties_Post')
  .post(function(req, res){
    propertiesController.save(req,res);
 });

router.route('/properties_Get')
  .get(function(req, res){
      propertiesController.findAll(req,res);
 });

router.route('/properties_update')
  .put(function(req, res){
    propertiesController.update(req,res);
 });




// Se exporta el modulo
module.exports = router;
