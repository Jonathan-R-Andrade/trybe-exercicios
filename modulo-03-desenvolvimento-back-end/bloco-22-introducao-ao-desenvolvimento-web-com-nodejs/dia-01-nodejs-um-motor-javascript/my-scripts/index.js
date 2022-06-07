const { keyInSelect } = require('readline-sync');

console.log('Lista dos scripts disponíveis para executar:');

const scripts = ['IMC', 'Velocidade', 'Sorteio'];

const scriptIndex = keyInSelect(scripts, 'Qual script executar?', {cancel: 'Cancelar'});
console.log('');

switch(scriptIndex){
  case 0:
    require('./imc');
    break;
  case 1:
    require('./velocidade');
    break;
  case 2:
    require('./sorteio');
    break;
}
