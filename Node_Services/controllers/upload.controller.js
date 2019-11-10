const mongoose = require('mongoose');
const csv = require("csvtojson");
const SalesHistory = require('../models/history.model');

/* Use child_process.spawn method from  child_process module and assign it 
   to variable spawn */
var spawn = require("child_process").spawn;

async function startUpload(req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });
    } else {
        console.log('file received');
        console.log('file Name ' + req.file.filename);

        //Convert the csv file to json array 
        const csvFilePath = './uploads/' + req.file.filename;
        try {
            var dataContents;
            csv().fromFile(csvFilePath)
                .then((jsonObj) => {
                    console.log('---------------------------');
                    console.log('Contents of the CSV file is');
                    console.log('---------------------------');
                    console.log(jsonObj);
                    this.dataContents = jsonObj;
                    return SalesHistory.deleteMany().exec()
                        .then(() => {
                            console.log('deleted');
                            SalesHistory.create(jsonObj, function (err, histories) {
                                if (err) {
                                    console.log('---------------------------');
                                    console.log('Collection Create error' + err);
                                    console.log('---------------------------');
                                } else {
                                    console.log('---------------------------');
                                    console.log('New SalesHistory collection added');
                                    console.log('---------------------------');
                                    console.log('Inside PythonShell Block');


                                    // Parameters passed in spawn - 
                                    // 1. type_of_script 
                                    // 2. list containing Path of the script 
                                    //    and arguments for the script  
                                    var pythonCSVfilePath = '/Users/parnabbasak/Documents/workspace/Group3_Hackathon/Node_Services/uploads/' + req.file.filename;
                                    var process = spawn('python3', ["./scripts/forecast.py",
                                        pythonCSVfilePath]);

                                    // Takes stdout data from script which executed 
                                    // with arguments and send this data to res object 
                                    process.stdout.on('data', function(data) { 
                                        console.log(data.toString()); 
                                    });
                                }
                            });
                            return true;
                        });
                });
        } catch (e) {
            console.log(e);
        }

        console.log('Response being send back');
        return res.send({
            success: true
        });
    }
}
module.exports.upload2 = startUpload;