# CRUD VELOURS

## Objetivo

O objetivo deste projeto é desenvolver uma aplicação web para gerenciar informações sobre produtos, utilizando as tecnologias Vue.js no frontend e Node.js no backend.

## Processo

#### Backend

O backend da aplicação será desenvolvido em Node.js, utilizando o modelo REST para a comunicação com o frontend. Serão implementadas as seguintes funcionalidades:

Definição e configuração das rotas REST para as operações de CRUD. Implementação dos controladores para cada rota, responsáveis por lidar com as requisições e as respostas. Conexão com a base de dados relacional e criação dos modelos de dados.

Conexão com a base de dados não-relacional e configuração para armazenar informações adicionais dos produtos.
Implementação das operações de CRUD para manipulação dos produtos na base de dados.

#### Frontend

O frontend da aplicação será desenvolvido em Vue.js, permitindo a interação do usuário com as funcionalidades do CRUD. Serão implementadas as seguintes funcionalidades:

Configuração das rotas para navegação na aplicação. Criação de componentes para exibição dos produtos, formulários de criação/edição, e outras interfaces necessárias.

Integração com as rotas REST do backend para realizar as requisições HTTP e obter/alterar os dados dos produtos.
Validação dos formulários de criação/edição para garantir dados consistentes antes de enviar as requisições.
Exibição dos produtos em uma lista e possibilidade de visualização detalhada de cada produto.
Implementação de funcionalidades de criação, edição e exclusão de produtos.

#### Configuração do Ambiente de Desenvolvimento

Para configurar o ambiente de desenvolvimento e executar o projeto, siga os passos abaixo:

#### Backend

Instale o Node.js na sua máquina, se ainda não estiver instalado. Clone o repositório do projeto.
Navegue até a pasta backend no terminal. Execute o comando npm install para instalar as dependências do projeto.
Configure as informações de conexão com as bases de dados relacional e não-relacional no arquivo config.js.
Execute o comando npm start para iniciar o servidor backend.

#### Frontend

Navegue até a pasta frontend no terminal. Execute o comando npm install para instalar as dependências do projeto. Execute o comando npm run serve para iniciar o servidor de desenvolvimento do frontend.

A aplicação estará acessível no endereço: 

http://localhost:8080.