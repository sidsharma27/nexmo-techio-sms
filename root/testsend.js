const request = require('supertest');
const express = require('express');

const app = express();

app.post('/send', function(req, res) {
  res.status(200).end();
});

request(app)
  .get('/send')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
