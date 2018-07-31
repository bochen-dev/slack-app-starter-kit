const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes/index');
const interact = require('./routes/interact');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/interact', interact);
app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Server is running');
  res.end();
});

// error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(PORT, () => {
  console.log(`service running on port: ${PORT}`);
});
