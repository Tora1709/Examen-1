var mongoose = require('mongoose');

var PropertySchema = new mongoose.Schema({
        name:  String,
          identification:  String,
          position:  Number,
          price:  Number,
          rent: String ,
          multpliedrent: String,
          housecost: Number,
          group: String,
          ownedby: String,
          buildings: Number,
          mortgaged: Boolean,
          rel: {
          	Square: String,
          	ProbabilityJailShort: Number,
          	Rank: Number,
          	ProbabilityJailLong: Number
          },
          ohousecost: Number,
          oprice: Number,
          averageProbability: Number

});

module.exports = mongoose.model('Property', PropertySchema);
