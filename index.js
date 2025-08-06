const express = require('express')
const app = express()//importando o express
const cors = require('cors')

app.use(cors())

app.use(express.static('build'))

//app.use(express.json())

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

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log(id)
  const note = notes.find(note => note.id === id) 
  
    if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
  
  // const note = notes.find(note => {
    // console.log(note.id, typeof note.id, id, typeof id, note.id === id)
    // return note.id === id
  // }) Para identificar o erro é bom retirar de arrow function
  console.log(note)
  response.json(note)
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

// const PORT = 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})