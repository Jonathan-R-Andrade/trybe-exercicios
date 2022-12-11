# Exercícios

Iremos realizar dois exercícios que utilizam vários dos conceitos, métodos e estratégias vistas ao longo da aula. Lembre-se de pensar sobre o problema e anotar todas as situações que podem ocorrer.

__Os exercícios foram retirados do banco de questões utilizadas em processos de contratação de grandes empresas (questões liberadas para estudo).__

__Exercício 1 - Facebook__
Você receberá uma lista de palavras e uma *string*. Escreva uma função que decida quais palavras podem ser formadas com os caracteres da *string* (cada caractere só pode ser utilizado uma vez). Retorne a soma do comprimento das palavras escolhidas.

__Exemplo 1:__

```Python
words = ["cat", "bt", "hat", "tree"], chars = "atach"
# saída: 6
"""Explicação: As palavras que podem ser formadas com os caracteres da string
               são "cat" (tamanho 3) e "hat" (tamanho 3)."""
```

__Exemplo 2:__

```Python
words = ["hello", "world", "students"], chars = "welldonehoneyr"
# saída: 10
"""Explicação: As palavras que podem ser formadas com os caracteres da string
               são "hello" (tamanho 5) e "world" (tamanho 5)."""
```

> ⚠️ *Faça a análise de complexidade da sua solução.*

__Exercício 2 - Google__
Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a uma única outra pessoa. Cada pessoa tem um score que é o total de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados, além dela própria. Isso significa que uma pessoa que não tem nenhuma equipe tem score 1. Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.

Escreva um método que calcule o score de uma determinada pessoa.

__👀 De olho na dica:__ para saber o score de uma pessoa, você precisa saber o score das pessoas da equipe dela, correto? Qual estratégia utiliza a mesma função dentro dela própria?

__Exemplo de subordinados:__

```
- 1 => 2, 3

- 2 => 4

- 3 => sem subordinados

- 4 => 5, 6

- 5 => 7

- 6 => sem subordinados

- 7 => sem subordinados
```

Neste exemplo, o __score__ de cada pessoa é:

```
- 1 => 5 (score 2) + 1 (score 3) + 1 (score dele próprio) = 7

- 2 => 4 (score 4) + 1 (score dele próprio) = 5

- 3 => 1 (score dele próprio)

- 4 => 2 (score 5) + 1 (score 6) + 1 (score dele próprio) = 4

- 5 => 1 (score 7) + 1 (score dele próprio) = 2

- 6 => 1 (score dele próprio)

- 7 => 1 (score dele próprio)
```

> ⚠️ *Faça a análise de complexidade da sua solução.*

> *`Bônus:` É muito comum em entrevistas que, quando a pessoa resolve o problema dentro do tempo, façam-se perguntas `"follow-up"`, que dificultam a questão. Os `follow-ups` abaixo são opcionais.*

__Follow-ups:__

1. Caso a empresa precise fazer essa consulta frequentemente, como você pode tornar essas consultas mais eficientes? Como você pode guardar o resultado de consultas anteriores?

2. Escreva um método para incluir uma nova pessoa na equipe de uma outra pessoa. Seu método deve considerar que cada pessoa pode ter no máximo `k` pessoas em seu time. Se o time estiver cheio, a nova contratada pode ser alocada na equipe de qualquer pessoa abaixo dela, não precisando ser na equipe imediatamente abaixo.

3. Se você adicionar uma nova contratação à lista de subordinadas, a estrutura que você fez no `follow-up 1` está desatualizada. Modifique suas funções para que essa estrutura seja atualizada junto com a adição de uma nova contratação. Faça isso sem rodar de novo a função `score()` e lembre-se de atualizar todos os scores desde a pessoa da presidência até a equipe que a nova contratação entrou.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathan-r-andrade/) na [Trybe](https://www.betrybe.com/)
