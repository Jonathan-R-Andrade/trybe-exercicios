# Exercícios

Os exercícios propostos possuem níveis variáveis de dificuldade. Tente fazer o máximo que conseguir.

> Para realizar os exercícios 1 a 7, restaure o banco de dados Pixar abaixo.

```SQL
DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Staton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);
```

__Exercício 1:__ Insira as produções da Pixar na tabela `Movies`:
   * Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
   * Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
   * Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
   * WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

   __*Resposta:*__
   ```SQL
   INSERT INTO Pixar.Movies (title, director, `year`, length_minutes)
   VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
   ('Procurando Nemo', 'John Lasseter', 2003, 107),
   ('Os Incríveis', 'Brad Bird', 2004, 116),
   ('WALL-E', 'Pete Docter', 2008, 104);
   ```

__Exercício 2:__ O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela `BoxOffice`.

   __*Resposta:*__
   ```SQL
   INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
   VALUES (9, 6.8, 450000000, 370000000);
   ```

__Exercício 3:__ O nome do diretor do filme "Procurando Nemo" está incorreto, ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o comando `UPDATE`.

   __*Resposta:*__
   ```SQL
   UPDATE Pixar.Movies
   SET director = 'Andrew Staton'
   WHERE id = 9;
   ```

__Exercício 4:__ O título do filme "Ratatouille" está incorreto na tabela `Movies`. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando `UPDATE`.

   __*Resposta:*__
   ```SQL
   UPDATE Pixar.Movies
   SET title = 'Ratatouille', `year` = 2007
   WHERE id = 3;
   ```

__Exercício 5:__ Insira as novas classificações abaixo na tabela `BoxOffice`, lembre-se que a coluna `movie_id` é uma foreign key referente a coluna `id` da tabela `Movies`:
   * Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
   * Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
   * WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

   __*Resposta:*__
   ```SQL
   INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
   VALUES (8, 8.5, 300000000, 250000000),
   (10, 7.4, 460000000, 510000000),
   (11, 9.9, 290000000, 280000000);
   ```

__Exercício 6:__ Exclua da tabela `Movies` o filme "WALL-E".

   __*Resposta:*__
   ```SQL
   DELETE FROM Pixar.BoxOffice
   WHERE (movie_id = 11);
   DELETE FROM Pixar.Movies
   WHERE (id = 11);
   ```

__Exercício 7:__ Exclua da tabela `Movies` todos os filmes dirigidos por "Andrew Staton".

   __*Resposta:*__
   ```SQL
   DELETE FROM Pixar.BoxOffice
   WHERE movie_id IN (2,9);
   DELETE FROM Pixar.Movies
   WHERE id IN (2,9);
   ```

# Bônus

> Para realizar os exercícios 8 a 10, faça os exercícios anteriores (1 a 7) e utilize o banco de dados Pixar.

__Exercício 8:__ Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.

   __*Resposta:*__
   ```SQL
   UPDATE Pixar.BoxOffice
   SET rating = 9.0
   WHERE movie_id IN (6,10) AND domestic_sales > 400000000;
   ```

__Exercício 9:__ Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.

   __*Resposta:*__
   ```SQL
   UPDATE Pixar.BoxOffice
   SET rating = 6.0
   WHERE movie_id IN (3,7,8)
   AND international_sales < 300000000
   AND domestic_sales > 200000000;
   ```

__Exercício 10:__ Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.

   __*Resposta:*__
   ```SQL
   DELETE FROM Pixar.BoxOffice
   WHERE movie_id IN (1,6,7,8);
   DELETE FROM Pixar.Movies
   WHERE id IN (1,6,7,8) AND length_minutes < 100;
   ```

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathan-r-andrade/) na [Trybe](https://www.betrybe.com/)
