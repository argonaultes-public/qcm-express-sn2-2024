const Qcm = require('./qcm');

const qcms = [
    new Qcm('BDD', 'sql', 'relational'),
    new Qcm('Javascript', 'sort', 'language'),
    new Qcm('Framework', 'MVC', 'web')
];

module.exports = qcms;