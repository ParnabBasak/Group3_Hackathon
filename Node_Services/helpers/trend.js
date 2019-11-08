
exports.getTrend = function(thisChannel, startDate, endDate, trendCollection){
    trendCollection.find(
        {
            channel: thisChannel,
            saleDate: { $gte: startDate, $lt: endDate }
        }
    ).then(function(data){
        return(data);
    }).catch(function(err){
        return ({
            status: 500,
            msg: 'Something went wrong in finding neverland'
        })
    })
    
}