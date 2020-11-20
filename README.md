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
* ```\d <tablename>``` - посмотреть структуру таблицы

### Запросы
* CREATE TABLE - создать таблицу
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
