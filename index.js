require('dotenv').config();
const express = require('express');
const server = express();
const repository = require('./db');

server.listen(process.env.PORT), () => {
    console.log(`Servidor rodando na porta de conexão ${process.env.PORT}.`)
};

// Routes
server.get('/products', repository.getProducts)
server.get('/products/:id', repository.getProductById)
server.post('/products', repository.createProduct)
server.update('/products/:id', repository.updateProduct)
server.delete('/products/:id', repository.deleteProduct)