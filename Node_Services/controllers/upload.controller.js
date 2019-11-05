const mongoose = require('mongoose');
const fs = require('fs');
var _ = require('underscore');
const csv = require("csvtojson");

module.exports.upload = (req, res) => {
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        console.log('file received');
        console.log('file contents ' + req.file);
        console.log('file Name ' + req.file.filename);

        //convert the csv file to json array 
        const csvFilePath = './uploads/'+req.file.filename
        csv()
            .fromFile(csvFilePath)
            .then((jsonObj) => {
                console.log(jsonObj);
            })
        return res.send({
            success: true
        })
    }
}