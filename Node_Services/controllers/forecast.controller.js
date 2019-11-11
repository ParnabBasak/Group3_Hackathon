
var salesForecast = require('../models/forecast.model');
exports.getSalesDates = function(req, res) {

    var id = req.params.id;
    
    salesForecast
   // .find({channel: id }, {saleDate: 1, _id: 0})  // search query
   .distinct( "saleDate" , {channel : id } )
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
