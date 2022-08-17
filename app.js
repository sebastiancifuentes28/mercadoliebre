const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en puerto 3000", 3000);
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/ayuda', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/ayuda.html'))
});

app.get('/crea-tu-cuenta', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/ingresa', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/ingresa.html'))
});

app.get('/mis-compras', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/mis-compras.html'))
});

app.get('/ofertas', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/ofertas.html'))
});

app.get('/tiendas-oficiales', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/tiendas-oficiales.html'))
});

app.get('/vender', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/vender.html'))
});

