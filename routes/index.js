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

router.post('/vote', (req, res) => {
  let { text } = req.body;
  text = text.split('or');
  const actions = text.map((e) => {
    const action = e.trim().replace(/"/g, '');
    return {
      name: action,
      text: action,
      type: 'button',
      value: action,
    };
  });

  res.setHeader('Content-Type', 'application/json');
  res.json({
    attachments: [
      {
        text: 'Choose one',
        callback_id: 'command/vote',
        color: '#2c3e50',
        attachment_type: 'default',
        actions,
      },
    ],
  });
});

module.exports = router;
