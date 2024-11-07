const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send('Hello EPSI');
});

app.listen(
    port,
    () => {
        console.log(`Listening on http://localhost:${port}`);
    }
);