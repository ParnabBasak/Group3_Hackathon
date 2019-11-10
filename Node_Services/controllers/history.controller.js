
var saleshistory = require('../models/history.model');
exports.getSalesDates = function(req, res) {

    var id = req.params.id;
    
    saleshistory
    //.find({channel: id }, {saleDate: 1, _id: 0})
    .distinct( "saleDate" , {channel : id } )  // search query
    .then(function(data){
         if(data){ 
             res.json(data);
        }
         else{
             res.status(404).json({
                 msg:'Data Not Found.'
         })        
         }
     })
     .catch(function(err){
        res.status(500).json({
            msg:'Something went wrong.'
        })
    })
 }
