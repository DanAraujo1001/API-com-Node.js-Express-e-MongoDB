# Aula Prática - API com Node.js, Express e MongoDB

Este projeto consiste em uma API REST simples construída com **Node.js**, utilizando a biblioteca **Express** para lidar com rotas e middlewares, além de integrar com o **MongoDB** através do **Mongoose**. O projeto é ideal para fins de estudo e prática de conceitos fundamentais no desenvolvimento backend.

## 📦 O que o código faz?

A API permite realizar operações **CRUD (Create, Read, Update, Delete)** em uma entidade (por exemplo, livros ou usuários) armazenada no MongoDB. Utilizando requisições HTTP, você pode criar novos registros, buscar, atualizar ou deletar informações no banco de dados. A API também conta com middleware personalizado para logar detalhes das requisições.

---

## 📚 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript server-side.
- **Express** — Framework minimalista para criação de APIs com Node.
- **Mongoose** — ODM que facilita a comunicação com o MongoDB.
- **MongoDB** — Banco de dados NoSQL utilizado para armazenar os dados.
- **dotenv** — Para gerenciar variáveis de ambiente.
- **Postman** — Ferramenta utilizada para testar as requisições da API.

---

## 🧱 CommonJS vs ES Modules

Apesar do **ES Modules (ESM)** estar crescendo em popularidade, **optei por utilizar o CommonJS** neste projeto por ser um padrão ainda amplamente adotado e consolidado na indústria. Isso também permite praticar com um estilo de importação/exportação tradicional, usando `require` e `module.exports`.

---

## ⚙️ Variáveis de Ambiente

Usei a biblioteca `dotenv` para carregar variáveis sensíveis (como a string de conexão com o banco de dados) a partir de um arquivo `.env`. Isso garante:

- Segurança ao evitar expor informações no código.
- Flexibilidade ao mudar configurações entre ambientes (dev, staging, production).

---

## 🧪 Testando com Postman

Durante o desenvolvimento, utilizei o **Postman** para enviar requisições HTTP (GET, POST, PUT, DELETE) à API. Isso permite:

- Verificar se o backend está funcionando corretamente.
- Testar diferentes cenários e validar os dados do MongoDB.
- Simular o comportamento de um cliente frontend.

---

## 🗂️ Schemas e Modelos com Mongoose

No Mongoose, criei **esquemas (schemas)** que definem a estrutura dos documentos armazenados no banco. A partir deles, instanciamos **modelos** que representam as coleções no MongoDB.

---

## 🔁 Operações CRUD com Express

A API disponibiliza endpoints que permitem interagir com os dados:

- `GET /books` — Lista todos os livros.
- `GET /books/:id` — Retorna um livro pelo ID.
- `POST /books` — Cria um novo livro.
- `PUT /books/:id` — Atualiza um livro existente.
- `DELETE /books/:id` — Remove um livro do banco.

---

## 🧩 Middleware

Um **middleware personalizado** foi implementado para registrar no console informações sobre as requisições recebidas, como o método HTTP e a rota acessada. Isso ajuda no monitoramento e depuração da aplicação.

--- 

## 📌 Observações

Este projeto é uma base de aprendizado e pode ser expandido com:

- ✨ **Rotas separadas por responsabilidade (modularização)** — para manter o código organizado conforme o número de entidades crescer.
- 🔐 **Validação básica dos dados** antes de salvar no banco, usando lógica simples com `if` ou adicionando validação no próprio schema do Mongoose.
- 📁 **Criação de controllers** para separar regras de negócio da configuração de rotas.
- 📦 **Estudo sobre deploy no Render ou Railway**, para colocar a API online de forma gratuita.
- 🌱 **Início do estudo sobre autenticação** com `JWT`, como uma próxima etapa para proteger certas rotas.

É uma ótima forma de consolidar os fundamentos do backend com JavaScript e se preparar para projetos mais robustos!
