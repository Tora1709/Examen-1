var User = require('./user.model.js');

module.exports.save = function(req, res) {

  var newUser = new User({
    code: req.body.code,
    nick: req.body.nick,
    coin: req.body.coin,
    name: req.body.name,
    photo: req.body.photo,
    bio: req.body.bio
  });


  newUser.save(function(err) {
    if (err) {
      res.json({
        success: false,
        msg: 'No se pudo registrar al profesor' + err
      });
    } else {
      res.json({
        success: true,
        msg: 'Se registró el profesor correctamente'
      });
    }
  });

}

module.exports.findAll = function(req, res) {
    User.find().then(function(users) {
        res.send(users);
    })
};


module.exports.update = function(req, res) {
    console.log(req.body.id);
    User.findByIdAndUpdate(req.body._id, {
        $set: req.body
    }).then(function(data) {
        res.json({
            success: true,
            msg: 'Se ha actualizado correctamente.'
        });
    });
}
