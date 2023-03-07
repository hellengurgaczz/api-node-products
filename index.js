require('dotenv').config();
const express = require('express');
const server = express();
const bodyParser = require('body-parser')
const repository = require('./src/products/repositories/productRepository');

server.listen(process.env.PORT), () => {
    console.log(`Servidor rodando na porta de conexão ${process.env.PORT}.`)
};

server.use(bodyParser.json());

server.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Routes
server.get("/", (req, res) => {
  res.send("Hi Docker!!!");
});
server.get('/products', repository.getProducts)
server.get('/products/:id', repository.getProductById)
server.post('/products', repository.createProduct)
server.put('/products/:id', repository.updateProduct)
server.delete('/products/:id', repository.deleteProduct)