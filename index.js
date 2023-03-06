require('dotenv').config();
const express = require('express');
const server = express();

server.listen(process.env.PORT), () => {
    console.log(`Servidor rodando na porta de conexão ${process.env.PORT}.`)
};

server.get('/products', (req, res) => {
    res.send('Products!');
})