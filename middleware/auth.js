const express = require('express');
const config = require('../config/index');

const router = express.Router();

router.post('/', (req, res, next) => {
  const { token } = req.body;
  if (token === config.verification_token) {
    next();
  } else {
    res.sendStatus(403);
    res.end();
  }
});

module.exports = router;
