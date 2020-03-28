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
$ npx knex migration:latest
```
desfazer ultimo comando npx knex migrate
```
$ npx knex migrate:rollback
```
configuration env
definida em knexfile.js
```
knex(configuration.xxx)
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


### Validation

Celebrate https://github.com/arb/celebrate

```
$ npm install celebrate
```

```
const { errors} = require('celebrate');
app.use(errors());
```

### Test

Jest https://github.com/facebook/jest

```
$ npm install jest -D
$ npx jest --init
```
```
$ npm test
```

#### supertest
fazer testes chamando a api.

```
$ npm install supertest -D
```

### gerenciar ambientes

```
$ npm install cross-env
```
example
```
"scripts": {
    "start": "nodemon src/index.js",
    "test": "cross-env NODE_ENV=test jest"
},
```
acessar a variavel de ambiente
```
process.env.NODE_ENV
```


## Frontend React

```
$ npx create-react-app frontend

```


#### Tools

- fonts.google.com
```
\\Embed font
@IMPORT
```

package of icons
```
$ npm install react-icons
```
```
// xxx.js
import { FiLogIn} from 'react-icons/fi';
```
- Feather icons
  

## Router

```
npm install react-router-dom
```

### Link
navegacao pelo component <Link >
```
import { Link } from 'rect-router-dom'

```

### Navegacao pelo javascript
```
import { useHistory } from 'react-router-dom';

history = useHistory();

history.push('/rota');
```

## Client http
```
npm install axios
```
