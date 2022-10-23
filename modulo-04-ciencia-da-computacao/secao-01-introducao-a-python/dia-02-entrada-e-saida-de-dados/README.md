# Exercícios

__Exercício 1:__ Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:

Entrada:

```
PEDRO
```

Saída:

```
PEDRO
PEDR
PED
PE
P
```

__Exercício 2:__ Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

Para embaralhar uma palavra faça: `scrambled_word = "".join(random.sample(word, len(word)))`

O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: `random.choice(["word1", "word2", "word3"]) -> "word2"`.

__Exercício 3:__ Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.


__Exercício 4:__ Dado o seguinte [arquivo](https://lms-assets.betrybe.com/lms/books.json) no formato __JSON__, leia seu conteúdo e calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato __CSV__ como o exemplo abaixo.

Saída:

```
categoria,porcentagem
Python,0.23201856148491878
Java,0.23201856148491878
PHP,0.23201856148491878
```

# Exercício - Bônus

__Exercício 5:__ Utilizando o arquivo `pokemons.json`, vamos escrever um programa que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária “Quem é esse pokemon?” até que ela o acerte. A cada erro, apresente um número de letras do nome daquele pokemon igual ao número de erros.

Exemplo: O pokemon sorteado pelo programa é `butterfree`; a pessoa usuária chuta `charizard`; o programa deve exibir `b`. Em seguida, a pessoa chuta `blastoise`; o programa deve exibir `bu`; e assim por diante até a pessoa acertar.

Você pode utilizar o método `choice` do modulo `random` para sortear aleatoriamente um pokemon. Ex: `random.choice(pokemon) -> {"name": "Pikachu" }`.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathan-r-andrade/) na [Trybe](https://www.betrybe.com/)
