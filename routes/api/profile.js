const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:nick', (req, res) => {
	res.send(`${req.params.nick}`);
});

module.exports = router;
