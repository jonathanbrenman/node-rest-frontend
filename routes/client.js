module.exports = function(app, router){

	//Here comes frontend pages
	router.get('/', function(req, res) {
	    res.sendFile('welcome.html', { root: 'views/' });
	});

	app.use('/', router);
}