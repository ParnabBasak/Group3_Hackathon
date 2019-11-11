const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const ctrlUser = require('../controllers/user.controller');
const ctrlUpload = require('../controllers/upload.controller');
const ctrlChannel = require('../controllers/channel.controller');
const ctrlHistory = require('../controllers/history.controller');
const ctrlForecast = require('../controllers/forecast.controller');
const ctrlTrend = require('../controllers/trend.controller');
const ctrlMaster = require('../controllers/master.controller');

const jwtHelper = require('../config/jwtHelper');




const DIR = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
let upload = multer({ storage: storage });

router.post('/upload', upload.single('saleshistory'), ctrlUpload.upload2);
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.get('/channels', ctrlChannel.getChannels);
router.get('/history/:id', ctrlHistory.getSalesDates);
router.get('/forecast/:id', ctrlForecast.getSalesDates);
router.post('/trends', ctrlTrend.getTrendController);
router.get('/master/:id', ctrlMaster.getLookups);

module.exports = router;