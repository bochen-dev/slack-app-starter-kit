const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

router.use('/', auth);

router.post('/echo', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    response_type: 'ephemeral',
    text: `${req.body.text}`,
  });
});

module.exports = router;
