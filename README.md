<p align="center">
  <img src="./assets/images/logo.png" alt="A Song of Ice and Fire brand logo" width="700px" />
</p>

# A Song of Ice and Fire Quotes

Esta é uma API simples feita em Node.js que fornece citações dos livros _As Crônicas de Gelo e Fogo_. A API permite buscar citações aleatórias, por ID ou por personagem. Todas as citações estão armazenadas em um arquivo `.txt`, sem o uso de banco de dados.

## Requisitos

1. Ter o Node.js instalado no seu ambiente;
2. Criar um arquivo `quotes.json` onde cada objeto representa uma citação;
3. Criar um arquivo `server.js` para rodar a API.

## Passo a Passo

1. Inicialize um projeto Node.js;
2. Instale o Express.js para facilitar o gerenciamento dos endpoints;
3. No `server.js`, importe os módulos necessários;
4. Crie os endpoints:
   - Adicionar uma nova citação;
   - Obter uma citação aleatória;
   - Obter uma citação pelo ID;
   - Obter citações de um personagem;
   - Editar uma citação existente;
   - Deletar uma citação;
