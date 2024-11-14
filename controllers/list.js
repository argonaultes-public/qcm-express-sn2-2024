const qcms = require('../models/database');

function listQcmsFunc(request, response) {

    response.render('list.ejs', {'qcm': qcms[0]});
}

const listQcmsConst = (request, response) => {
    response.render('list.ejs', {qcms});
}

module.exports = {listQcmsConst, listQcmsFunc};