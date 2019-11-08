const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const ctrlUser = require('../controllers/user.controller');
const ctrlUpload = require('../controllers/upload.controller');
const jwtHelper = require('../config/jwtHelper');
//Added by Abhijit on 11/7 for trend.controller
const ctrlTrend = require('../controllers/trend.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

//Added by Abhijit on 11/7 for trend.controller
router.post('/gettrend', ctrlTrend.getTrendController);

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
//router.post('/upload', ctrlUpload.upload2);

module.exports = router;