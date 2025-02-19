const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 10000;

// Configurar pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
