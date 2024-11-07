const express = require('express');
const welcomeController = require('./controllers/welcome');
const testController = require('./controllers/qcm');
const {listQcmsConst, listQcmsFunc} = require('./controllers/list');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', welcomeController);

app.get('/qcm', testController);

app.get('/list', listQcmsFunc);


app.listen(
    port,
    () => {
        console.log(`Listening on http://localhost:${port}`);
    }
);