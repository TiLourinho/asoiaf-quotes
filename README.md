<p align="center">
  <img src="./public/images/asoiaf-logo.png" alt="A Song of Ice and Fire brand logo" width="700px" />
</p>

<p align="center">
 <a href="#funcionalidades">Funcionalidades</a> • 
 <a href="#endpoints">Endpoints</a> • 
 <a href="#como-executar">Como Executar</a> • 
 <a href="#autenticação">Autenticação</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#autoria">Autoria</a>
</p><br>

# A Song of Ice and Fire Quotes

Esta é uma API feita em Node.js que fornece citações da série de livros _As Crônicas de Gelo e Fogo_. A API permite buscar citações aleatórias, por ID ou randômicas por personagem.

## Funcionalidades

- **CRUD completo** de citações;
- **Citação aleatória** (ex: `/quote/random`);
- **Busca por id** (ex: `/quote/:id`);
- **Busca por personagem** (ex: `/quote?character=tyrion`);
- **Validação de dados** robusta;
- **Autenticação simplificada** via senha única.

## Endpoints

| Método | Endpoint                  | Descrição                                      | Autenticação |
| ------ | ------------------------- | ---------------------------------------------- | ------------ |
| GET    | `/quote/random`           | Retorna uma citação aleatória                  | ❌           |
| GET    | `/quote/:id`              | Retorna uma citação específica                 | ❌           |
| GET    | `/quote?character={nome}` | Retorna uma citação randômica de um personagem | ❌           |
| POST   | `/quote`                  | Adiciona nova citação                          | ✅           |
| PUT    | `/quote/:id`              | Atualiza uma citação                           | ✅           |
| DELETE | `/quote/:id`              | Remove uma citação                             | ✅           |
| POST   | `/auth/login`             | Gera um token de autenticação                  | ❌           |

## Como Executar

```Bash
# Clone o repositório
$ git clone https://github.com/TiLourinho/asoiaf-quotes.git

# Instale as dependências
$ npm install

# Configure o .env (copie o exemplo)
$ cp .env.example .env

# Inicie o servidor
$ npm start
```

### Variáveis de ambiente

```Ini
# Node.js server
PORT=4000

# Postgres-WSL connection
HOST="localhost"
USER="seu_user"
PASSWORD=sua_senha
DATABASE="asoiaf"
DBPORT=5432

# Postgres-Docker connection
POSTGRES_USER=seu_user
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=asoiaf

# Password for protected routes
API_PASSWORD=sua_senha_para_a_api
JWT_SECRET=sua_chave_secreta
```

## Autenticação

Rotas protegidas exigem um token JWT no header:

```Http
Authorization: Bearer <token>
```

Como obter o token:

```Bash
curl -X POST http://localhost:4000/login \
  -H "Content-Type: application/json" \
  -d '{"password":"sua_senha_para_a_api"}'
```

## Tecnologias

- [Node.js](https://nodejs.org/pt)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Joi](https://joi.dev/)
- [Dotenv](https://github.com/motdotla/dotenv)

## Autoria

Tiago Lourinho

[![Gmail Badge](https://img.shields.io/badge/-lourinho.tiago@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lourinho.tiago@gmail.com)](mailto:lourinho.tiago@gmail.com)
