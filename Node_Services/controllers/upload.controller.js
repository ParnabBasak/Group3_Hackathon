const mongoose = require('mongoose');
const fs = require('fs');
var _ = require('underscore');
const csv = require("csvtojson");
const SalesHistory = require('../models/history.model');

module.exports.upload = (req, res) => {
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        console.log('file received');
        console.log('file Name ' + req.file.filename);

        //Convert the csv file to json array 
        const csvFilePath = './uploads/' + req.file.filename
        csv()
            .fromFile(csvFilePath)
            .then((jsonObj) => {
                console.log('---------------------------')
                console.log('Contents of the CSV file is')
                console.log('---------------------------')
                console.log(jsonObj);

                // First drop the existing collection
                SalesHistory.collection.drop()
                    .then(() => {
                        console.log('---------------------------')
                        console.log('Previous SalesHistory collection removed')
                        console.log('---------------------------')

                        // Contents array is parsed and saved to collection saleshistory
                        SalesHistory.create(jsonObj, function (err, histories) {
                            if (err) {
                                console.log('---------------------------')
                                console.log('Collection Create error' + err)
                                console.log('---------------------------')
                            } else {
                                console.log('---------------------------')
                                console.log('New SalesHistory collection added')
                                console.log('---------------------------')
                            }
                        });
                    });
            })
        return res.send({
            success: true
        })
    }
}