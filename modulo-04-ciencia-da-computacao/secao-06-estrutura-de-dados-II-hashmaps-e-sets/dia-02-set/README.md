# Exercícios

__Exercício 1 - Blefe__

Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive. A pontuação final é calculada da seguinte forma:

* A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu;
* O redutor é o menor numero que a outra pessoa não escolheu;
* A pontuação final é a `nota de partida - redutor`.

_Exemplo:_

```Python
clara = [0, 1, 5, 9, 10]
# nota de partida: 5
# redutor: 1
# pt: 4

marco = [0, 2, 8, 9, 10]
# nota de partida: 8
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco
```

Implemente uma função que receba um dicionário com os nomes e números chutados e retorne o nome de quem ganhou.

```Python
entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

# saída: 'Marco'
```

> __Faça a análise de complexidade da sua solução.__

__Exercício 2 - Substring__

Dada uma _string_, ache o tamanho da maior _substring_ que não tenha caracteres repetidos. Complexidade de tempo limite aceitável: `O(n²)`.

```Python
string = "serdevemuitolegalmasehprecisoestudarbastante"
```

> __Faça a análise de complexidade da sua solução.__

__Exercícios - bônus__

__Desafio__

Otimizar o algoritmo do __exercício 2__ para ter uma complexidade de tempo limite de `O(n)`.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathan-r-andrade/) na [Trybe](https://www.betrybe.com/)
