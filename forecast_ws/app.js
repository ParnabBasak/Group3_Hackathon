
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.CONN_URL||'mongodb://localhost:27017/Forecast',
    {useNewUrlParser: true, useUnififedTopology: true},
    function(err){
        if (!err) console.log('db connected');
    });

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('Default path');
});
app.use('/getforecast', function(req,res){
    res.send('Getting the forecast');
});

app.listen(process.env.PORT_FORECAST_WS||4300, function(){
    console.log('Server listening on port: ', process.env.PORT_FORECAST_WS||4300);
})
