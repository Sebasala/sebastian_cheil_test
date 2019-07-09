const express = require('express');
const db = require("./db/data.json");

const app = express();

// Get first 9 hotels
app.get('/api/hotels', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'hotels retrieved successfully',
    hotels: db.slice(0,9)
  })
});

// get hotel by id
app.get('/api/hotels/:id', (req, res) => {
  // Get hotel id
  const id = req.params.id;
  
  //Default response
  let response = {
      success: 'false',
      message: 'Hotel does not exist',
  };

  for (let i = 0; i < db.length; i++ ) {
      if (db[i].id === id) {
          response = {
              success: 'true',
              message: 'Hotel retrieved successfully',
              hotel: db[i],
          }
      }
  };
  if (response.success) {
      return res.status(200).send(response);
  } else {
      return res.status(404).send(response);
  };
});

// get hotels by stars
app.get('/api/hotels/stars/:stars', (req, res) => {
  // Get stars parameter
  const stars = parseInt(req.params.stars, 10);

  let hotels = [];

  for (let i = 0; i < db.length; i++ ) {
      if (db[i].stars === stars) {
          hotels.push(db[i]);
      }
  };

  if (hotels.length > 0) {
    let response = {
      success: 'true',
      message: 'Hotels retrieved successfully',
      results: hotels.length,
      hotels
    }
    return res.status(200).send(response);
  } else {
    let response = {
      success: 'false',
      message: 'No hotels where found',
      hotels
    }
    return res.status(404).send(response);
  }
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);