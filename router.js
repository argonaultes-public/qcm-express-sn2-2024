const express = require('express');
const welcomeController = require('./controllers/welcome');
const {testController, qcmDetails, displayNewQcm, createQcm} = require('./controllers/qcm');
const {listQcmsConst, listQcmsFunc} = require('./controllers/list');


const router = express.Router();

// add routes

router.get('/', welcomeController);

router.get('/qcm', testController);

router.get('/list', listQcmsFunc);

router.get('/list2', listQcmsConst);


// NOUVEAU QCM Etape 1 : créer une route GET pour afficher le formulair d'ajout

router.get('/qcm/new', displayNewQcm);

// NOUVEAU QCM Etape 2 : créer une route POST pour traiter le formulaire

router.post('/qcm/new', createQcm);

// Etape 1 : ajouter une nouvelle route prenant en paramètre l'id du QCM
router.get('/qcm/:qcmid', qcmDetails);


module.exports = router;