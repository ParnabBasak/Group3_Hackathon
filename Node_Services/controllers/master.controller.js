var Lookups = require('../models/lookups.model');

exports.getLookups = function(req, res) {

    var id = req.params.id;
    Lookups.find({ key: id })
     .then(function(data){
         res.json(data);
     })
     .catch(function(err){
        res.status(500).json({
            msg:'Something went wrong.'
        })
    })
   
}
