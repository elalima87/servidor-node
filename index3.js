const http = require('http')


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
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes))
  //O valor application/json no cabeçalho Content-Type informa o receptor de que os dados estão no formato JSON. O array notes é transformado em JSON com o método JSON.stringify(notes)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)