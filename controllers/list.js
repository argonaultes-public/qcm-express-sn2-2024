function listQcmsFunc(request, response) {
    response.render('list.ejs', {'qcm': 'Space Exploration'});
}

const listQcmsConst = (request, response) => {
    const qcms = [
        'Space Exploration',
        'Javascript',
        'Database',
        'UI/UX'
        ];
    response.render('list.ejs', {qcms});
}

module.exports = {listQcmsConst, listQcmsFunc};