
exports.getdbData = function(searchCriteria, collection2Search){
    var promise = new Promise(function(resolve,reject){
        collection2Search.find(
            searchCriteria
    ).then(function(data){
        resolve(data);
    }).catch(function(err){
        reject ({
            status: 500,
            msg: 'Something went wrong in finding neverland'
        })
    });
    });
    return promise;
}

exports.getMonYear = function(dtValue){
    var dt = new Date(dtValue);
    return(dt.toLocaleString('default',{month: 'short', year: 'numeric'}))
}