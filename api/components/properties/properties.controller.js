//Requerimos el modelo  de usuarios
var Property = require('./properties.model.js');

module.exports.save = function(req,res){ //exporta el controlador

         var newProperty = new Property({
          name:  req.body.name,
          id:  req.body.id,
          position:  req.body.position,
          price:  req.body.price,
          rent: req.body.rent,
          multpliedrent: req.body.multpliedrent,
          housecost: req.body.housecost,
          group: req.body.group,
          ownedby: req.body.ownedby,
          buildings: req.body.buildings,
          mortgaged: req.body.mortgaged,
          rel: req.body.rel,
          ohousecost: req.body.ohousecost,
          oprice: req.body.oprice,
          averageProbability: req.body.averageProbability
        });

        newProperty.save(function(err){
          if(err){
            res.json({success:false,msg:'El usuario ya existe.'});
          }else {
            res.json({success:true,msg:'Se ha registrado correctamente.'});
          }
        });

}

module.exports.findAll = function(req,res){
  Property.find().then(function(properties){
    res.send(properties);
  });
}

module.exports.update = function(req,res){
  console.log(req.body.id);
  Property.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });
}
