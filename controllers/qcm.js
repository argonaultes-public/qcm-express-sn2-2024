const qcms = require('../models/database');

const testController = (request, response) => {
    response.render('test.ejs');
};
// Etape 2 : rajouter un contrôleur qui récupère l'id du QCM à afficher
// Etape 3 : filtrer parmi tous les QCMS celui qui a l'id correspondant
// Etape 4 : déclencher le rendu de la vue avec le QCM correspondant à l'id

// ---

// Etape 5 : si la vue n'existe pas, créer le fichier template ejs correspondant details.ejs


const qcmDetails = (request, response) => {
    const id = request.params.qcmid;
    const qcm = qcms.find(
        (element) => id == element.id
    );
    response.render('details.ejs', {qcm});
};

module.exports = {testController, qcmDetails};