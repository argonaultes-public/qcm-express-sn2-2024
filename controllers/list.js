function listQcmsFunc(request, response) {
    response.render('list.ejs');
}

const listQcmsConst = (request, response) => {
    response.render('list.ejs');
}

module.exports = {listQcmsConst, listQcmsFunc};