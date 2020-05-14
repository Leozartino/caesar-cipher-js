const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

function separaTexto(texto){
  let data = texto;

  data = data.toLowerCase();
  data = data.split("");

  return data;
}

function desencryptaString(str, deslc){
  str = separaTexto(str);
  let output = str;
  let sub = 0;
  for(let x = 0; x < str.length; x ++){
    let indexAlfabeto= alfabeto.indexOf(str[x]);
    sub = indexAlfabeto - deslc;

    if(str[x].includes(alfabeto[indexAlfabeto])){
      if(sub < 0 ){
        elemento = (alfabeto.length) - Math.abs((indexAlfabeto - deslc) % alfabeto.length);
      } else {
        
        elemento = Math.abs((indexAlfabeto - deslc) % alfabeto.length);
      }

      output[x] = alfabeto[elemento];
    } 
  }
  output = output.join('').replace(',',' ')
  return output;
}

module.exports = desencryptaString;