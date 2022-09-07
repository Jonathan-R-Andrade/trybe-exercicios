# Exercícios

Para os exercícios você utilizará um dataset pequeno com alguns filmes. Para isso, conecte-se à sua instância e utilize o trecho de código abaixo para criar o banco de dados e inserir os documentos:

```
use cinema;
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
]);
```

> Para cada execução, utilize o método `find()` para conferir as alterações nos documentos.

O `MongoDB` possui diversas ferramentas, como `mongo`, `mongosh`, `Compass`, além de outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries. O importante é realizá-las.

__Exercício 1:__ Adicione a categoria `"superhero"` ao filme `Batman`.

__Exercício 2:__ Utilizando o modificador `$each`, adicione as categorias `"villain"` e `"comic-based"` ao filme `Batman`.

__Exercício 3:__ Remova a categoria `"action"` do filme `Batman`.

__Exercício 4:__ Remova o primeiro elemento do array `category` do filme `Batman`.

__Exercício 5:__ Remova o último elemento do array `category` do filme `Batman`.

__Exercício 6:__ Adicione o elemento `"action"` ao array `category` do filme `Batman`, garantindo que esse valor não se duplique.

__Exercício 7:__ Adicione a categoria `"90's"` aos filmes `Batman` e `Home Alone`.

__Exercício 8:__ Crie um array de documentos chamado `cast` para o filme `Home Alone` com os seguintes dados:

```json
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```

__Exercício 9:__ Adicione o campo `character` com o valor `Marv` ao array de `cast` em que o campo `actor` seja igual a `Daniel Stern` no filme `Home Alone`.

__Dica:__ [Leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$`.

__Exercício 10:__ Crie um array de documentos chamado `cast` para o filme `Batman` com os seguintes dados:

```json
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
```

__Exercício 11:__ Produza três querys para o filme `Batman`:

   * Adicione o campo `actor`, que deve ser um array com o valor `Christian Bale`, ao array de `cast` em que o campo `character` seja igual a `Batman`;
   * Adicione o campo `actor`, que deve ser um array com o valor `Michael Caine`, ao array de `cast` em que o campo `character` seja igual a `Alfred`;
   * Adicione o campo `actor`, que deve ser um array com o valor `Heath Ledger`, ao array de `cast` em que o campo `character` seja igual a `Coringa`.

__Dica:__ [Leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$`.

__Exercício 12:__ Adicione aos atores de `cast` do `character Batman` do filme `Batman` os valores `"Michael Keaton"`, `"Val Kilmer"` e `"George Clooney"`, e deixe o array em ordem alfabética.

__Dica:__ [Leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$`.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
