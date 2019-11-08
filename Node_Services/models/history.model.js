const mongoose = require('mongoose');

var historySchema = new mongoose.Schema({
    channel: {  
        type: String
    },
    saleDate: {
        type: Date
    },
    producct: {
        type: String
    },
    attribute: {
        type: String
    },
    quantity: Number
});


// Export the model
module.exports = mongoose.model('SalesHistory', historySchema);