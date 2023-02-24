const express = require('express');
const cors = require('cors');
const app = express();

app.use(
  cors({
    Credential: true,
    origin: 'http://127.0.0.1:5174/',
  }),
);

app.get('/test', (req, res) => {
  res.json('test okay');
});

app.listen(4000);
