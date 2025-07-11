const request = require('supertest')
const app = require('../src/app')

describe('Testes da API de usuários', () => {
  beforeEach(() => {
    // Reseta o "banco" antes de cada teste para garantir isolamento
    app.locals.users = []
  })

  it('Deve criar um usuário com sucesso', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Patricia', email: 'pati@example.com', age: 30 })

    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.name).toBe('Patricia')
  })

  it('Deve rejeitar usuário sem nome', async () => {
    const res = await request(app)
      .post('/users')
      .send({ email: 'pati@example.com', age: 30 })

    expect(res.statusCode).toBe(400)
    expect(res.body).toHaveProperty('error')
  })
})
