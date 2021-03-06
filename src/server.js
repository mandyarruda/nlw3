
// importar biblioteca

const express = require('express')
const path = require('path')

// iniciando o express (biblioteca)

const server = express()

server
// utilizando os arquivos estáticos
.use(express.static('public'))

// criar uma rota

server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
}) 


// ligar o servidor
server.listen(5500)