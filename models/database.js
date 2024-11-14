const Qcm = require('./qcm');

let currentId = 0;

const qcms = [
    new Qcm(currentId++, 'BDD', 'sql', 'relational'),
    new Qcm(currentId++, 'Javascript', 'sort', 'language'),
    new Qcm(currentId++, 'Framework', 'MVC', 'web')
];



const addQcm = (body) => {
    console.log('add qcm');
    qcms.push(new Qcm(
        currentId++,
        body.name,
        body.subject,
        body.theme
    ));
}

module.exports = {qcms, addQcm};