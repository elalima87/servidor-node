const http = require('http')//a aplicação importa o módulo integrado web server do Node

//O código usa o método createServer ("criarServidor") do módulo http para criar um novo servidor web. Um gerenciador de evento é registrado no servidor que é chamado sempre que uma requisição HTTP é feita para o endereço http://localhost:3001 do servidor.
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
  //A requisição é respondida com o código de status 200, com o cabeçalho Content-Type definido como text/plain, e o conteúdo do site a ser retornado definido como Hello World.
  
})

//As últimas linhas vinculam o servidor http atribuído à variável app para ouvir as requisições HTTP enviadas à porta 3001:
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)