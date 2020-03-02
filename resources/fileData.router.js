const { getFileData } = require('./fileData.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const { Router } = require('express');

router = Router();

router.post('/fileData', upload.single('upfile'), getFileData);

module.exports = router;
