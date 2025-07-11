require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json()) // permite receber JSON no corpo da requisição

// Banco fake só pra testes (em memória)
let users = []
let idCounter = 1

// Rota para listar usuários
app.get('/users', (req, res) => {
  res.json(users)
})

// Criar usuário
app.post('/users', (req, res) => {
  const { name, email, age } = req.body

  if (!name || !email || !age) {
    return res.status(400).json({ error: 'name, email e age são obrigatórios' })
  }

  const newUser = { id: idCounter++, name, email, age }
  users.push(newUser)
  res.status(201).json(newUser)
})

// Atualizar usuário
app.put('/users/:id', (req, res) => {
  const { id } = req.params
  const { name, email, age } = req.body

  const user = users.find(u => u.id === parseInt(id))
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' })

  if (name) user.name = name
  if (email) user.email = email
  if (age) user.age = age

  res.json(user)
})

// Deletar usuário
app.delete('/users/:id', (req, res) => {
  const { id } = req.params
  const initialLength = users.length
  users = users.filter(u => u.id !== parseInt(id))

  if (users.length === initialLength) {
    return res.status(404).json({ error: 'Usuário não encontrado' })
  }

  res.status(204).send()
})

module.exports = app
