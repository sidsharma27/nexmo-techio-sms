const Nexmo = require('nexmo'); //nexmo node lib
const express = require('express'); //expressJS (server)
const bodyParser = require('body-parser'); //body parser to parse the incoming http request
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//initialize nexmo client w/ your apikey & secret
const nexmo = new Nexmo({
  apiKey: "",
  apiSecret: ""
});

// Handle both GET and POST requests
app.get('/inbound', (req, res) => {
  handleParams(req.query, res);
});

app.post('/inbound', (req, res) => {
  handleParams(req.body, res);
});

function handleParams(params, res) {
  if (!params.to || !params.msisdn) { //doesn't have the to # or from # -> usually hit when verifiying the endpoint (callback)
    console.log('This is not a valid inbound SMS message!');
  } else { //has to & from aka is a text
    console.log('Incoming Text:');
    console.log('---------------------');
    let incomingData = {
      messageId: params.messageId,
      from: params.msisdn,
      text: params.text,
      type: params.type,
      timestamp: params['message-timestamp']
    };
    console.log('Message ID: ' + incomingData.messageId);
    console.log('Message From: ' + incomingData.from);
    console.log('Message Text: ' + incomingData.text);
    console.log('Message Type: ' + incomingData.type);
    res.send(incomingData);
  }
  res.status(200).end();
}

module.exports = app;
