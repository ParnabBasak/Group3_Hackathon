var mongoose = require('mongoose');

var lookupsSchema = new mongoose.Schema({
    key: { type: String , required:true},
    values :{
        key: String,
        value: String
    }
},
{
    timestamps:true
})


module.exports = mongoose.model('lookups', lookupsSchema);
