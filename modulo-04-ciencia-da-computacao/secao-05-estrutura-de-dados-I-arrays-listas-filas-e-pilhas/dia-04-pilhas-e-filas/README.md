# Exercícios

Baseado nos conhecimentos adquiridos nesta seção, e para relembrar as `TADs` vistas em aulas passadas, implemente as seguintes `TADs`, utilizando a lista como a estrutura interna:

__Exercício 1:__
*Filas:* crie uma classe Queue, onde deve conter as operações: `enqueue`, `dequeue`, `peek` e `is_empty`.

> *Para este desafio, é necessário efetuar o `import` das classes `LinkedList` e `Node` e utilizar seus métodos de acesso para simular uma fila, respeitando o padrão* __FIFO__.

__Exercício 2:__
*Pilhas:* crie uma classe `Stack`, onde deve conter as operações: `push`, `pop`, `peek` e `is_empty`.

__Exercício 3:__
Estenda a classe `Stack`, que escrevemos durante as explicações do conteúdo, adicionando uma nova função chamada `min_value()` que irá retornar o menor valor inteiro presente na pilha. Por exemplo:

> *stack.py*

```Python
# ...

content_stack.push(1)
content_stack.push(-2)
content_stack.push(3)
print(content_stack.min_value()) # saída: -2
```

> *Fonte:* [Min Stack](https://leetcode.com/problems/min-stack/)<br>
__Faça a análise de complexidade da sua solução.__

__Exercício 4:__
Estenda a classe `Stack`, que escrevemos durante as explicações do conteúdo, para que ela suporte um limite de itens dentro da pilha. Se definirmos que a pilha deve ter o tamanho dois, ela não poderá ter três itens. Por exemplo:

> *stack_limit.py*

```Python
# ...

content_stack = LimitStack(2)
content_stack.push(1)
content_stack.push(-2)

try:
    content_stack.push(3)
except StackOverflow:
    print("Não é possível adicionar outro item à pilha")
```

> *Dica: Para esse exercício, crie uma nova classe, no mesmo diretório da classe `Stack`.*<br>
__Faça a análise de complexidade da sua solução.__

__Exercício 5:__
Um estacionamento comercial possui uma garagem em forma de linha, ou seja, somente é possível parar os carros enfileirados. Para auxiliar as pessoas que trabalham manobrando os veículos, iremos escrever um programa para que eles consigam adicionar novos veículos na garagem e retirar os veículos conforme a solicitação dos clientes. Escreva um programa que faça essas duas operações, inserção de veículos e a remoção do veículo desejado pela pessoa. Lembrando que os veículos que foram removidos para se chegar no veículo do cliente, ficam parados na rua e depois são adicionados na mesma ordem que estavam no estacionamento.

> __Faça a análise de complexidade da sua solução.__

__Exercício 6:__
Dada a função que faz a resolução de expressões pós fixas, adicione as operações de subtração e divisão. Considere os exemplos abaixo para testar a sua alteração na função.

*Nota:* transforme as expressões em pós fixas e atribua valores. Caso seja necessário, faça o `cast` do valor para ponto flutuante.

| Expressão infixa      |
|:---------------------:|
| A + B - C / A         |
| B + (A * C) / C * 2   |
| A * B - C + 4 * A - B |
| (A + C / B) * (A + B) |
| 50 * B / 2 * 5 / A    |

> __Faça a análise de complexidade da sua solução.__

__Exercício 7:__
Dado uma *string*, contendo letras e parênteses. Crie uma função que irá reverter os caracteres de tal forma que somente os caracteres dentro dos parênteses sejam revertidos. A string final não deve conter os parênteses. Por exemplo:

```Python
string = 'teste(lagel)'
resultado = 'testelegal'
```

> *Fonte:* [Reverse Substrings Between Each Pair of Parentheses](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/)<br>
> __Faça a análise de complexidade da sua solução.__

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathan-r-andrade/) na [Trybe](https://www.betrybe.com/)
