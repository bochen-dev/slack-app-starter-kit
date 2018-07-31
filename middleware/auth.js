const express = require('express');
const config = require('../config');
const auth = require('./middleware/auth');

const router = express.Router();

router.use('/', auth);

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
