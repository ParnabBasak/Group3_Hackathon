
exports.getTrend = function(thisChannel, startDate, endDate, trendCollection){
    var promise = new Promise(function(resolve,reject){
        trendCollection.find(
        {
            channel: thisChannel,
            saleDate: { $gte: startDate, $lt: endDate }
        }
    ).then(function(data){
        resolve(data);
    }).catch(function(err){
        resolve ({
            status: 500,
            msg: 'Something went wrong in finding neverland'
        })
    });
    });
    return promise;
}
