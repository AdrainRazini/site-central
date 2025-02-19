const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Esse aqui é o nosso Servidor para o site"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para página inicial ele faz nossa pasta publica aparecer no Google
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
//Esse é o http do nosso site para deixar em um repositorio
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
