const express = require('express');
const config = require('../config');

const router = express.Router();

router.post('/echo', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    response_type: 'ephemeral',
    text: `${req.body.text}`
  });
});

module.exports = router;
