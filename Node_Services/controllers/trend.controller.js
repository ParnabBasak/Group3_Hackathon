const SalesHistory = require('../models/history.model');
const SalesForecast = require('../models/forecast.model');
const GetHelp = require('../helpers/get.help');
const _ = require('lodash');

exports.getTrendController = async function(req,res){
    
    var data = req.body;

    var thisChannel = data.channel;

    var summaryTemplate = {};

    var historyStartDate = new Date(data.historyStartDate);
    var historyTrendWeeks = data.historyTrendWeeks;
    var historyEndDate = new Date(historyStartDate);
    historyEndDate.setDate(historyStartDate.getDate()+(historyTrendWeeks*7));
    
    var historyWeeks = {}
    var dt = new Date(historyStartDate);
    dt.setDate(dt.getDate()-6);
    for (let i=1;i<=historyTrendWeeks;i++){
        dt.setDate(dt.getDate()+7);
        historyWeeks['Week '+(i)] = {'saleDate':dt.toDateString(),quantity: '-'};
    }

    var forecastStartDate = new Date(data.forecastStartDate);
    var forecastTrendWeeks = data.forecastTrendWeeks;
    var forecastEndDate = new Date(forecastStartDate);
    forecastEndDate.setDate(forecastStartDate.getDate()+(forecastTrendWeeks*7));
    
    var forecastWeeks = {}
    dt = new Date(forecastStartDate);
    dt.setDate(dt.getDate()-6);
    for (let i=1;i<=forecastTrendWeeks;i++){
        dt.setDate(dt.getDate()+7);
        forecastWeeks['Week '+(i)] = {'saleDate':dt.toDateString(),quantity: '-'};
        var dtString = GetHelp.getMonYear(dt);
        if (summaryTemplate[dtString] == undefined){
            summaryTemplate[dtString] = 0;
        } 
    }
    
    var historySearchCriteria = {$query: 
        {
            channel: thisChannel,
            saleDate: { $gte: historyStartDate, $lt: historyEndDate }
        },
        $orderby: {saleDate:1}
    }
    var history = await GetHelp.getdbData(historySearchCriteria, SalesHistory);
    var listOfProductNames = [];
    var resultSet = [];
    var indexSet = {};
    var indexSetCounter = 0;

    history.forEach(
        function(data){
            listOfProductNames.push(data.producct)
            var isNew = false;
            let historyData = {};
            let index = 0;
            if (indexSet[data.producct + '~' + data.attribute]=== undefined ){
                index = indexSetCounter++;
                indexSet[data.producct + '~' + data.attribute] = index;
                isNew = true;
            } else {
                index = indexSet[data.producct + '~' + data.attribute];
            }
            
            if (isNew){
                historyData = JSON.parse(JSON.stringify(historyWeeks));
                let saleDate = new Date(data.saleDate);
                for(let i=1;i<=historyTrendWeeks;i++){
                    let tempDt = new Date(historyData['Week '+i].saleDate);
                    let endDt = new Date(tempDt);
                    endDt.setDate(endDt.getDate()+7);
                    if ((tempDt <= saleDate) && (saleDate< endDt)){
                        historyData['Week '+i].quantity = data.quantity;
                        break;
                    }
                }
                let dataSet = {
                    productname: data.producct,
                    attribute: data.attribute,
                    history: historyData, 
                    forecast: JSON.parse(JSON.stringify(forecastWeeks)),
                    forecastSummary: JSON.parse(JSON.stringify(summaryTemplate))
                }
                resultSet.push(dataSet);
            } else {
                historyData = resultSet[index].history;
                dt = new Date(data.saleDate);
                for(let i=1;i<=historyTrendWeeks;i++){
                    let tempDt = new Date(historyData['Week '+i].saleDate);
                    let endDt = new Date(tempDt);
                    endDt.setDate(endDt.getDate()+7);
                    if ((tempDt <= dt) && (dt < endDt)){
                        historyData['Week '+i].quantity = data.quantity;
                        break;
                    }
                }
            }
        }
    )
    listOfProductNames = _.uniq(listOfProductNames);
    
    forecastSearchCriteria = {
        $query: {
            channel: thisChannel,
            saleDate: { $gte: forecastStartDate, $lt: forecastEndDate },
            producct: { $in: listOfProductNames }
        },
        $orderby: {saleDate:1}
    }
    orderBy = {saleDate:1};
    var forecast = await GetHelp.getdbData(forecastSearchCriteria, SalesForecast);
    //var forecast = SalesForecast.find( { producct: { $in: listOfProductNames } }).then(function(data){return data}).catch(function(err){return err});
    forecast.forEach(
        function(data){
            var key = data.producct + '~' + data.attribute;

            index = indexSet[key];
            if (index === undefined){
                let dataSet = {
                    productname: data.producct,
                    attribute: data.attribute,
                    history: JSON.parse(JSON.stringify(historyWeeks)), 
                    forecast: JSON.parse(JSON.stringify(forecastWeeks)),
                    forecastSummary: JSON.parse(JSON.stringify(summaryTemplate))
                }
                index = indexSetCounter++;
                indexSet[key] = index;
                console.log('History not found for product: ', data.producct + '~' + data.attribute);
                resultSet.push(dataSet);
            } 
            var obj2Update = resultSet[index];
            var forecastData = obj2Update.forecast;
            var summary = obj2Update.forecastSummary;
            var saleDate = new Date(data.saleDate);
            var dtString = GetHelp.getMonYear(saleDate);
            if (summary[dtString] == undefined){
                summary[dtString] = data.quantity;
            } else {
                summary[dtString] = summary[dtString] + data.quantity;
            }
            for (let i=1;i<=forecastTrendWeeks;i++){
                let templateDt = new Date(forecastData['Week '+i].saleDate);
                let endDt = new Date(templateDt);
                endDt.setDate(endDt.getDate()+7);
                if (templateDt <= saleDate < endDt){
                    forecastData['Week '+i].quantity = data.quantity;
                }
            }
    });

    res.json({
        resultSet
    });
}
