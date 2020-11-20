В этом репозитории я выкладываю решения по основам программирования с ресурса Хекслет.
# Подсказки

- [Postgresql](#postgresql)

Postgresql
=============
### Основные команды
* ```whoami``` - узнать под каким именем пользователя выполнен вход
* ```brew install postgresql``` - установить postgresql
* ```brew services start postgresql``` - запуск postresql
* ```psql postgres``` - подключится к базе данных
* ```psql -l``` - посмотреть список баз данных
* ```sudo -u <name> psql``` - подключится к базе данных через psql из под пользователя с именем <name>
* ```sudo -u postgres createuser —create <user name> --createdb```  добавляет возможность создавать базы данных. По умолчанию этой возможности нет.
* ```createdb <db name>``` - создать базу данных
* ```dropdb <db name>``` - удалить базу данных
* [cоздание ролей](https://postgrespro.ru/docs/postgrespro/11/database-roles) - подсказка, роли базы данных
* [pgAdmin](https://www.postgresqltutorial.com/connect-to-postgresql-database/) - подскзака, как подключиться к базе через pgAdmin
* ```\?``` - полный список команд внути psql
* ```\du``` - список ролей
* ```\l``` - список баз
* ```\dt``` - список таблиц
* ```\d <tablename>``` - посмотреть структуру таблицы

## Запросы
### Таблицы
* ```CREATE TABLE <table name>``` - создать таблицу
* ```DROP TABLE <table name>``` - удалить таблицу
##### Пример:
```sql
CREATE TABLE courses (
  name	varchar(255),
  body	text,
  created_at timestamp
);

CREATE TABLE users (
  first_name varchar(255),
  email varchar(255),
  manager	boolean
);

CREATE TABLE course_members (
  user_id	integer,
  course_id	integer,
  created_at timestamp
);
```

### Вставка и модификация данных
За манипуляцию данными отвечает подмножество DML (Data Manipulation Language)
#### Вставка INSERT
#### Примеры
```
INSERT INTO courses (name, slug, lessons_count, body)
  VALUES ('basics of programming', 'basics', 10, 'this is theory');
```
Оставить некоторые поля пустыми
```
INSERT INTO courses (name, slug) VALUES ('Bash', 'bash');

```

Вставить несколько записей в одном запросе
```
INSERT INTO courses (name, slug)
  VALUES ('Bash', 'bash'), ('PHP', 'php'), ('Ruby', 'Ruby');
```
Без перечисления полей
```
INSERT INTO courses VALUES ('linux', 'linux', 3, 'something about linux');
```

#### Извлечение SELECT
#### Примеры
```SELECT * FROM courses;```
#### Результат
|name|slug|lessons_count|body|
|-----|-----|-----|-----|
|basics of programming|basics|10|this is theory|
|Bash|bash|
|Bash|bash|
|PHP|php|
|Ruby|ruby|
|linux|linux|3|something about linux|

#### Обновление UPDATE
#### Примеры
Обновить одно поле
```
UPDATE courses SET = 'updated' WHERE slug = 'bash';
```
Обновить несколько полей
```
UPDATE courses SET body = 'updated', name = 'Bash' WHERE slug = 'bash';
```
Обновить без WHERE. Использовать в крайнем случае, так как обновятся **ВСЕ** записи
```
UPDATE courses SET body = 'oops';
```
Запросы с WHERE с другими операциями
* Операции сравнения
```
  UPDATE courses SET name = 'new name' WHERE lessons_count > 3;
  UPDATE courses SET name = 'another new name' WHERE lessons_count < 2;
```
* Логические операции
  * **И**
   ```
   UPDATE courses SET name = 'new name'
    WHERE slug = 'bash' AND lessons_count > 3;
   ```
   * **ИЛИ**
   ```
   UPDATE courses SET name = 'another new name'
    WHERE lessons_count < 2 OR lessons_count > 8;
   ```
   * Задать явный приориет с помощью круглых скобок
   ```
   UPDATE courses SET name = 'another new name'
    WHERE (lessons_count < 2 AND lessons_count > 8) OR slug = 'linux';
   ```

#### Удаление DELETE
#### Примеры
Очень **опасный** метод.
```DELETE FROM courses WHERE slug = 'bash'```

#### Удаление TRUNCATE
Удаляет все данные из таблицы.
#### Примеры
```TRUNCATE courses```

**[⬆ оглавление](#подсказки)**
