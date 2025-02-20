const express = require('express');
const app = express();
const port = 3000;
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    response.send( await readFile('index.html', 'utf8') );
});

app.listen(port, () => {
    console.log('Example app listening on http://localhost:3000');
});
