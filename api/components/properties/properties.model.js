var mongoose = require('mongoose');

var PropertySchema = new mongoose.Schema({
        name:  String,
          identification:  String,
          position:  String,
          price:  String,
          rent: String ,
          multpliedrent: String,
          housecost: String,
          group: String,
          ownedby: String,
          buildings: String,
          mortgaged: String,
          rel: {
          	Square: String,
          	ProbabilityJailShort: String,
          	Rank: String,
          	ProbabilityJailLong: String
          },
          ohousecost: String,
          oprice: String,
          averageProbability: String
	
});

module.exports = mongoose.model('Property', PropertySchema);