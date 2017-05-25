const express = require('express');
const bodyParser = require(body-parser);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.listen(3000);
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '',
  apiSecret: ''
});

app.post('/send', (req, res) => {
  // Send SMS
  nexmo.message.sendSms('NEXMO_VIRTUAL_NUMBER', 'DESTINATION_NUMBER', 'Text_Message', (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      console.dir(responseData);
    }
  });
});
