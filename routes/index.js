const express = require('express');
const path = require('path');

const messagesController = require('../controllers/messages');

const router = express.Router();

router.get('/', messagesController.getMessages);

module.exports = router;
