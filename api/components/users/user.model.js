//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios


var UserSchema = new mongoose.Schema({
  code: {type: Number, required:false},
  nick: {type: String, required:false},
  coin: {type: Number, required:false},
  name: {type: String, required:false},
  photo: {type: String, required:false}
});

module.exports = mongoose.model('user', UserSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
