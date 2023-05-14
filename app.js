const express = require('express');
const app = express();

app.use(express.static('public'));

// Маршрут для главной страницы
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Маршрут для страницы "О нас"
app.get('/geoloc', function (req, res) {
    res.sendFile(__dirname + '/public/about.html');
});

// Маршрут для страницы контактов
app.get('/books', function (req, res) {
    res.sendFile(__dirname + '/public/contact.html');
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
});