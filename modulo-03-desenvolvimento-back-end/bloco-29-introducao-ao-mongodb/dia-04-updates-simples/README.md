# Exercícios

Para os exercícios, você utilizará um dataset pequeno com alguns filmes.

Conecte-se à sua instância do __MongoDB__ local e insira os seguintes documentos na coleção `movies` do banco de dados `class`:

```json
{
  "title": "Batman",
  "category": [ "action", "adventure" ],
  "imdbRating": 7.6,
  "budget": 35
},
{
  "title": "Godzilla",
  "category": [ "action", "adventure", "sci-fi" ],
  "imdbRating": 6.6
},
{
  "title": "Home Alone",
  "category": [ "family", "comedy" ],
  "imdbRating": 7.4
}
```
Verifique se você tem três documentos na coleção.

Para cada execução, utilize o método find() para conferir as alterações nos documentos.

O MongoDB possui diversas ferramentas, como, por exemplo, `mongo`, `mongo sh`, `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries, o importante é realizá-las.

__Exercício 1:__ Altere o `imdbRating` para `7.7` no filme `Batman`.

__Exercício 2:__ Altere `budget` para `1` no filme `Godzilla`.

__Exercício 3:__ Altere `budget` para `15` e `imdbRating` para `5.5` no filme `Home Alone`.

__Exercício 4:__ Aumente em `2` o `imdbRating` do filme `Batman`.

__Exercício 5:__ Aumente em `5` o `budget` do filme `Home Alone`.

__Exercício 6:__ Multiplique por `4` o `imdbRating` do filme `Batman`.

__Exercício 7:__ Renomeie o campo `budget` para `estimatedBudget` do filme `Batman`.

__Exercício 8:__ Utilize o operador `$min` para alterar o `budget` para `5` do filme `Home Alone`.

__Exercício 9:__ Utilize o operador `$max` para alterar o `imdbRating` para `8.6` do filme `Godzilla`. Além disso, altere a categoria `"adventure"` para `"thriller"` do filme `Godzilla`.

__Exercício 10:__ Utilizando o operador `$currentDate`, crie um campo chamado `lastUpdated` com o tipo `timestamp` no filme `Home Alone`.

__Exercício 11:__ Utilizando uma única operação, crie um campo chamado `sequels` e atribua a ele o valor 0 em todos os documentos.

__Exercício 12:__ Utilizando uma única operação, remova os campos `budget` e `estimatedBudget` em todos os documentos.

__Exercício 13:__ Para os filmes `Batman` ou `Home Alone`, atribua a `imdbRating` o valor `17`, caso o valor de `imdbRating` seja menor que `17`.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
