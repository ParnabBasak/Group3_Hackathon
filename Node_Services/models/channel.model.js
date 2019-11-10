var mongoose = require('mongoose');

var channelsSchema = new mongoose.Schema({
    channelId:{type: String , required:true},
    channelName:{type:String}
},
{
    timestamps:true
})


module.exports = mongoose.model('channel',channelsSchema);
