const config = require('./config.json')

module.exports = function(){
  var greet = document.createElement('div');
  greet.textContent = config.text;
  return greet;
}
