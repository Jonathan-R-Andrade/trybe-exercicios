import { keyInSelect } from 'readline-sync';

async function main() {
  const scripts: string[][] = [
    [
      'length',
      'mass',
      'capacity',
      'area',
      'volume',
    ],
    [
      'Comprimento',
      'Massa',
      'Capacidade',
      'Área',
      'Volume',
    ]
  ];

  const scriptsIndex = keyInSelect(scripts[1], 'Qual conversão deseja realizar? ');
  if (scriptsIndex < 0) return;
  const chosenScript = scripts[0][scriptsIndex];

  console.log('');
  require(`./scripts/${chosenScript}`);
}

main();
