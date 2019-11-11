var Channel = require('../models/channel.model');

exports.getChannels = function(req, res) {
    Channel.find()
     .then(function(data){
         res.json(data);
     })
     .catch(function(err){
        res.status(500).json({
            msg:'Something went wrong.'
        })
    })
   
}
