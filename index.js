const express = require('express');
const welcomeController = require('./controllers/welcome');
const {testController, qcmDetails} = require('./controllers/qcm');
const {listQcmsConst, listQcmsFunc} = require('./controllers/list');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', welcomeController);

app.get('/qcm', testController);

app.get('/list', listQcmsFunc);

app.get('/list2', listQcmsConst);

// Etape 1 : ajouter une nouvelle route prenant en paramètre l'id du QCM
app.get('/qcm/:qcmid', qcmDetails);

// NOUVEAU QCM Etape 1 : créer une route GET pour afficher le formulair d'ajout

// NOUVEAU QCM Etape 2 : créer une route POST pour traiter le formulaire

app.listen(
    port,
    () => {
        console.log(`Listening on http://localhost:${port}`);
    }
);