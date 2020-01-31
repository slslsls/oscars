require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
  res.json('hi');
});

app.listen(3000);
