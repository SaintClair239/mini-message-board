const express = require('express');

const newMessageController = require('../controllers/new-message');

const router = express.Router();

router.get('/new', newMessageController.getNewMessage);
router.post('/new', newMessageController.postNewMessage);

module.exports = router;
