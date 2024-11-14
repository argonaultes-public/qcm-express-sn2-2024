const welcomeController = (request, response) => {
    response.render('welcome.ejs', {title: 'Hello EPSI'});
};

module.exports = welcomeController;