<p align="center">
  <img src="./public/images/asoiaf-logo.png" alt="A Song of Ice and Fire brand logo" width="700px" />
</p>

<p align="center">
 <a href="#funcionalidades">Funcionalidades</a> • 
 <a href="#endpoints">Endpoints</a> • 
 <a href="#como-executar">Como Executar</a> • 
 <a href="#autenticação">Autenticação</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#melhorias-futuras">Melhorias</a> • 
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

```Bash
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
```
