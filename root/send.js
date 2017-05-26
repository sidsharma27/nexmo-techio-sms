const Nexmo = require('nexmo');
const prettyjson = require('prettyjson');

const nexmo = new Nexmo({
  apiKey: 'apiKey',
  apiSecret: 'apiSecret'
});

nexmo.message.sendSms('VIRTUALNUMBER', 'TONUMBER', 'TEXT', (err, responseData) => {
  if (err) {
    console.log(err);
  } else {
    prettyjson.render(responseData);
  }
});
