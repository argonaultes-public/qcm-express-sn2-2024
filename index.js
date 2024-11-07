const express = require('express');
const welcomeController = require('./controllers/welcome');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', welcomeController);

app.get('/qcm', (request, response) => {
    response.render('test.ejs');
});

function listQcmsFunc(request, response) {
    response.render('list.ejs');
}

const listQcmsConst = (request, response) => {
    response.render('list.ejs');
}


app.get('/list', listQcmsFunc);


app.listen(
    port,
    () => {
        console.log(`Listening on http://localhost:${port}`);
    }
);