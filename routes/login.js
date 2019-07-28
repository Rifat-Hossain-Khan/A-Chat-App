const express = require('express');
const router = express.Router();
const user = require('../controller/user');

router.get('/', user.getLogin);
router.post('/', user.postLogin);
router.get('/chat', user.getChatbox);

module.exports = router;