const SalesHistory = require('../models/history.model');
const SalesForecast = require('../models/forecast.model');
const Trend = require('../helpers/trend');

exports.getTrendController = function(req,res){
    
    var data = req.body;

    var thisChannel = data.channel;

    var historyStartDate = new Date(data.historyStartDate);
    var forecastStartDate = new Date(data.forecastStartDate);
    
    var historyTrendWeeks = data.historyTrendWeeks;
    var forecastTrendWeeks = data.forecastTrendWeeks;
    
    var historyEndDate = new Date(historyStartDate);
    historyEndDate.setDate(historyStartDate.getDate()+(historyTrendWeeks*7));
    var forecastEndDate = new Date(forecastStartDate);
    forecastEndDate.setDate(forecastStartDate.getDate()+(forecastTrendWeeks*7));

    var returnObject = {
        history: Trend.getTrend(thisChannel, historyStartDate, historyEndDate, SalesHistory),
        forecast: Trend.getTrend(thisChannel, forecastStartDate, forecastEndDate, SalesForecast)
    };



}