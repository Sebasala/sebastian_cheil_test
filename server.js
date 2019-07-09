const express = require('express');
const db = require("./db/data.json");

const app = express();

app.get('/api/hotels', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'hotels retrieved successfully',
    hotels: db.slice(0,9)
  })
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);