let path = require('path')

  module.exports = function(app) {
	
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    })
}