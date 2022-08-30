# Exercícios

O MongoDB possui diversas ferramentas como, por exemplo, `mongo`, `mongosh`, `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries, o importante é realizá-las.

Utilizando a coleção [bios](https://docs.mongodb.com/manual/reference/bios-example-collection/), construa queries para retornar os seguintes itens:

__Exercício 1:__ Retorne o documento com o `_id` igual a 8.

__Exercício 2:__ Retorne o documento com o `_id` igual a 8, mas só exiba os atributos: `_id` e `name`.

__Exercício 3:__ Retorne apenas os atributos `name` e `birth` do documento com o `_id` igual a 8.

__Exercício 4:__ Retorne todos os documentos em que o atributo `name.first` seja igual a __John__, utilizando o método `pretty()`.

__Exercício 5:__ Retorne os 3 primeiros documentos da coleção `bios` utilizando o método pretty().

__Exercício 6:__ Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.

Utilizando o [mongoimport](https://docs.mongodb.com/database-tools/mongoimport/#examples), importe o arquivo [books.json](https://assets.app.betrybe.com/back-end/mongodb/books-48d15e4d8924badc2308cc4a62eb3ea4.json) para a sua instância local do MongoDB e utilize a coleção `books` para construir as seguintes consultas:

__Exercício 7:__ Retorne a quantidade de documentos da coleção `books`.

__Exercício 8:__ Conte quantos livros existem com o `status` = `"PUBLISH"`.

__Exercício 9:__ Exiba os atributos `title`, `isbn` e `pageCount` dos 3 primeiros livros. __NÃO__ retorne o atributo `_id`.

__Exercício 10:__ Pule 5 documentos e exiba os atributos `_id`, `title`, `authors` e `status` dos livros com o `status` = `"MEAP"`, limitando-se a 10 documentos.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
