const Qcm = require('./qcm');

const qcms = [
    new Qcm(1, 'BDD', 'sql', 'relational'),
    new Qcm(2, 'Javascript', 'sort', 'language'),
    new Qcm(3, 'Framework', 'MVC', 'web')
];

module.exports = qcms;