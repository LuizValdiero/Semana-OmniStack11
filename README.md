# Semana-OmniStack11

## Backend

### Create project

```
$ mkdir backend && cd backend
$ npm init -y
$ npm install express
```

### SQLite

Install
```
// KNEX.js  http://knexjs.org/
$ npm install knex
// SQLite
$ npm install sqlite3
```

```
npx knex init

// knexfile.js
```

Create migrations create_ongs

http://knexjs.org/#Migrations
```
// migrations responsavel por criar a tabela ongs
$ npx knex migrate:make create_ongs
```
update migrations
```
npx knex migration:latest
```
desfazer ultimo comando npx knex migrate
```
npx knex migrate:rollback
```

### *

Entidades
- ONG
- Incident

Funcionalidades
- Login de ONG
- Logout de ONG
- Cadastrar ONG
- Cadastrar Incidents
- Deletar Incidents
- Listar Incindents da ONG
- Listar todos os Incidents
- Entrar em contato com a ONG

## Frontend React

```
$ npx create-react-app frontend

```


