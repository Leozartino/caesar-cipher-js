const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const answerFile = require('./util/answer.json');
const julio_cesar_crypto = require('./algorithms/julio_cesar_crypto');
const sha1 = require('./algorithms/sha1');

const formData = new FormData();
const decodifica = julio_cesar_crypto;

const personalToken = require('./util/personalToken').personalToken;

axios.get(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${personalToken}`) 
  .then(function(response){

  const {numero_casas, cifrado, resumo_criptografico} = response.data

  const message = decodifica(cifrado, numero_casas);
  const resumo = sha1(message);

  const answer = {...response.data, decifrado: message, resumo_criptografico: resumo}

    fs.writeFile(__dirname + '/answer.json', JSON.stringify(answer), err => {
      console.log(err || 'Arquivo Salvo!');
    })
  }); 


for(let key in answerFile){
  formData.append(key, answerFile[key])
}


/* axios.post(`https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=${personalToken}` , formData, {
  filename:'answer',
  headers: {
    'Content-type': 'multipart-form'
  }
})
.then(function(response){
  console.log('msg:' + response)
});  
 */

console.log(formData);