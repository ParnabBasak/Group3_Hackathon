exports.getTrend = function(req,res){
    var data = req.body;
    var historyStartDate = new Date(data.historyStartDate);
    var forecastStartDate = new Date(data.forecastStartDate);
    var historyTrendWeeks = data.historyTrendWeeks;
    var forecastTrendWeeks = data.forecastTrendWeeks;
    var channel = data.channel;

       

}