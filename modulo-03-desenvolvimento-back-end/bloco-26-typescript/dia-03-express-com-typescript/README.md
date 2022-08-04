# Exercícios

Faça os exercícios utilizando o banco de dados abaixo:

```sql
CREATE DATABASE IF NOT EXISTS `TypeScriptExpress`;
USE `TypeScriptExpress`;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Posts`;
CREATE TABLE `Posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `author` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `publicationDate` date NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `Users`
VALUES
  (1, 'Geraldo', 'geraldo@email.com', '123456'),
  (2, 'Marceline', 'marceline@email.com', '123456');

INSERT INTO `Posts`
VALUES
  (1, 'Facebook vai dividir departamento de realidade aumentada e virtual', 'Renan', 'tecnologia', '2021-10-26'),
  (2, 'O que é UDP e quais as diferenças com o TCP?', 'Giulianna', 'tecnologia', '2021-10-26');
```

__Atividade 1__

__Objetivos:__

   * Criar um __CRUD__ completo de pessoas usuárias de uma aplicação.
   * Permitir que pessoas usuárias dessa aplicação façam *login* utilizando suas credenciais.
   * *Utilize a tabela __Users__ para realizar a atividade.*

__Rotas:__

   * Uma rota que lista todos as pessoas usuárias da aplicação;
   * Uma rota que lista uma única pessoa usuária a partir de seu *id*;
   * Uma rota que permite cadastrar uma nova pessoa usuária da aplicação;
   * Uma rota que permite editar o registro de uma única pessoa usuária cadastrada por meio de seu *id*;
   * Uma rota que permite deletar uma pessoa usuária da aplicação a partir de seu *id*.

__Regras:__

   * Uma pessoa usuária da aplicação deve possuir as propriedades *id*, nome, *email* e senha;
   * Nenhuma propriedade de uma pessoa usuária da aplicação pode ser nula ou vazia;
   * O *id* deve ser gerado automaticamente;
   * A senha deve possuir no mínimo 6 e no máximo 12 caracteres;
   * O nome deve possuir pelo menos 3 caracteres;
   * O *email* deve possuir um formato de *email* válido (email@email.com);
   * Ao criar um novo `user`, o *email* não pode já estar cadastrado.

__Atividade 2__

__Objetivos:__

   * Criar um __CRUD__ completo de *Blog *posts**.
   * Listar *posts* por autor, categoria ou data de criação.
   * *Utilize a tabela __Posts__ para realizar a atividade.*

__Rotas:__

   * Uma rota que lista todos os *posts*;
   * Uma rota que lista um único *post* por meio de seu *id*;
   * Uma rota que permite cadastrar um novo *post*;
   * Uma rota que permite editar o registro de um *post* cadastrado a partir de seu *id*;
   * Uma rota que permite deletar um *post* a partir de seu *id*.
   * Uma rota que recebe via `query params` o __autor__, a __categoria__ ou a __data de criação__ e lista todos os *posts* que se encaixem no filtro;

__Regras:__

   * Um *post* deve possuir as propriedades *id*, título, nome do autor, nome da categoria e data de criação;
   * __Nenhuma__ propriedade de um *post* pode ser nula ou vazia;
   * O nome do autor deve possuir pelo menos 3 caracteres;
   * O nome da categoria deve possuir pelo menos 3 caracteres;
   * A `query param` de data de criação deve ser no formato: aaaa-mm-dd;

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
