const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/error', (req, res) => {
    res
        .status(404)
        .send({
            error: 'Page not found!',
            values: 'values'
        });
});

app.get('/users', (req, res) => {
    res
        .status(200)
        .send([
            {
                name : "Gagan Gupta",
                age: 29
            },
            {
                name : "Amit",
                age: 30
            }
        ]);
});

app.listen(3000);

module.exports.app = app;
