const express = require('express')
const app = express()//importando o express


let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/', (request, response) => {
	//A função de gerência de evento aceita dois parâmetros. O primeiro parâmetro request (requisição) contém todas as informações da requisição HTTP, e o segundo parâmetro response (resposta) é usado para definir como a requisição é respondida.
  response.send('<h1>Hello World!</h1>')
  // a requisição é respondida usando o método send (enviar) do objeto response contendo a string <h1>Hello World!</h1>
  
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
  //A requisição é respondida com o método json do objeto response
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})