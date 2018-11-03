console.log("api here")
let friends = require('../data/friends.js')

//console.log(friends)

module.exports = function(app){
        app.get("/api/friends", function (req, res) {
            console.log(friends)
            res.json(friends)
        })
    
        
    }
     