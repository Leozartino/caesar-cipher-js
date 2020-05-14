const crypto = require('crypto');

function sha1( data ) {
  var generator = crypto.createHash('sha1');
  generator.update( data )  
  return generator.digest('hex') 
}


module.exports = sha1;

