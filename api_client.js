var axios = require('axios');

var instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000
});

var responseParser = (request) => {
  request.then(function(response) {
    console.log('\x1b[32m', response.config.url + ' : ' + response.statusText + ' ' + response.config.data);
  }).catch(function (err) {
    console.log('\x1b[31m', err.code + ': ' + err.config.url);
  })
}

exports.createCard = function (card) {
  responseParser(instance.post('/cards', card));
};
