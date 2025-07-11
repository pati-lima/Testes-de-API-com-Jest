# 🧪 API Teste com Node.js, Jest e Supertest

Este projeto é uma API simples desenvolvida para fins de aprendizado de testes automatizados, autenticação com Bearer Token e boas práticas de testes com Jest e Supertest.

## 🚀 Funcionalidades da API

- [x] Criar usuários (`POST /users`)
- [x] Listar usuários (`GET /users`)
- [x] Atualizar usuários (`PUT /users/:id`)
- [x] Deletar usuários (`DELETE /users/:id`)
- [x] Autenticação com Bearer Token
- [x] Validação de campos obrigatórios
- [x] Respostas de erro claras

## ✅ Testes Automatizados

Os testes foram escritos com [Jest](https://jestjs.io/) e [Supertest](https://github.com/visionmedia/supertest) e incluem:

- Criação de usuário com sucesso
- Validação de campos obrigatórios
- Acesso com e sem token
- Testes de performance básicos

## 🛠️ Tecnologias

- Node.js
- Express
- Jest
- Supertest
- dotenv

## ▶️ Como rodar

```bash
# Instale as dependências
npm install

# Crie um arquivo .env e defina a variável:
AUTH_TOKEN=seu_token_aqui

# Rode a API localmente
npm start

# Rode os testes
npm test
