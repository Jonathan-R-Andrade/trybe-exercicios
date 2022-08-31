# Exercícios

Para os exercícios a seguir, utilizaremos um banco de dados de super-heróis. Faça o download do arquivo JSON [aqui](https://assets.app.betrybe.com/back-end/mongodb/superheroes-957c961ea234d06d7cfdae73c87d47a6.json).

Após fazer o download do arquivo, importe-o para o __MongoDB__ através da ferramenta `mongoimport`. No seu terminal, utilize o seguinte comando (lembre-se de substituir `<caminho do arquivo>` pelo caminho do arquivo na sua máquina):

```bash
mongoimport --db class --collection superheroes <caminho_do_arquivo>
```

Pronto! Você já tem uma base de dados com 734 super-heróis. Para conferir, conecte-se à instância do seu banco de dados utilizando o __Mongo Shell__ e execute os seguintes comandos:

```bash
use class;

db.superheroes.countDocuments({});
```

Os documentos têm a seguinte estrutura:

```json
{
    "_id" : ObjectId("5e4ed2b2866be74b5b26ebf1"),
    "name" : "Abin Sur",
    "alignment" : "good",
    "gender" : "Male",
    "race" : "Ungaran",
    "aspects" : {
        "eyeColor" : "blue",
        "hairColor" : "No Hair",
        "skinColor" : "red",
        "height" : 185,
        "weight" : 40.82
    },
    "publisher" : "DC Comics"
}
```

O MongoDB possui diversas ferramentas. Por exemplo, o `mongo`, o `mongosh`, o `Compass` e outras ferramentas de terceiros. Você pode utilizar aquela que achar melhor para executar as consultas (queries), o importante é realizá-las.

__Exercício 1:__ Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.

__Exercício 2:__ Selecione todos os super-heróis com __menos de 1.80m__ de altura. Lembre-se de que essa informação está em centímetros.

__Exercício 3:__ Retorne o total de super-heróis __menores que 1.80m__.

__Exercício 4:__ Retorne o total de super-heróis com __até 1.80m__.

__Exercício 5:__ Selecione um super-herói com __2.00m ou mais__ de altura.

__Exercício 6:__ Retorne o total de super-heróis com __2.00m ou mais__.

__Exercício 7:__ Selecione todos os super-heróis que têm __olhos verdes__.

__Exercício 8:__ Retorne o total de super-heróis com __olhos azuis__.

__Exercício 9:__ Utilizando o operador `$in`, selecione todos os super-heróis com __cabelos pretos ou carecas__ (`"No Hair"`).

__Exercício 10:__ Retorne o total de super-heróis com __cabelos pretos ou carecas__ (`"No Hair"`).

__Exercício 11:__ Retorne o total de super-heróis que __não__ tenham __cabelos pretos__ ou __não__ sejam __carecas__.

__Exercício 12:__ Utilizando o operador `$not`, retorne o total de super-heróis que __não__ tenham mais de __1.80m__ de altura.

__Exercício 13:__ Selecione todos os super-heróis que __não__ sejam __humanos nem__ sejam maiores do __que 1.80m__.

__Exercício 14:__ Selecione todos os super-heróis com __1.80m__ ou __2.00m__ de altura e que __sejam publicados__ pela __Marvel Comics__.

__Exercício 15:__ Selecione todos os super-heróis que __pesem__ entre __80kg__ e __100kg__, sejam __Humanos__ ou __Mutantes__ e __não sejam publicados__ pela __DC Comics__.

__Exercício 16:__ Retorne o total de documentos que __não__ contêm o campo __race__.

__Exercício 17:__ Retorne o total de documentos que __contêm__ o campo __hairColor__.

__Exercício 18:__ Remova __apenas um__ documento publicado pela __Sony Pictures__.

__Exercício 19:__ Remova todos os documentos __publicados__ pelo __George Lucas__.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
