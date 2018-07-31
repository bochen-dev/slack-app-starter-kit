const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const { payload: payloadStr } = req.body;
  const payload = JSON.parse(payloadStr);

  const action = payload.actions.length > 0 ? payload.actions[0] : null;

  switch (payload.callback_id) {
    case 'command/vote':
      res.json({
        response_type: 'ephemeral',
        text: `Your selection : ${action.value}`,
      });
      break;

    default:
      res.json({
        response_type: 'ephemeral',
        text: `Nothing...`,
      });
      break;
  }
});

module.exports = router;
