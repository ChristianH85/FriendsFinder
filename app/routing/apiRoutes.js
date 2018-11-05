 //console.log("api here")
let friends = require('../data/friends.js')

console.log(friends)

module.exports = function (app){
        app.get("/api/friends", function (req, res) {
            
            res.json(friends)
        })
    
        app.post("api/friends", function(req, res){
            console.log("post here")
            console.log(req)
            let match = {
                name: "",
                photo: "",
                comp: 100
            }

            let newInput = req.body
            let newName = req.body.name
            let newPhoto = req.body.photo
            let newAns = req.body.scores
            
            let scoreDiff = 0
            
            for(let i =0; i = friends.length; i++){
                
                for(let j = 0; i < 10; i++ ){
                    scoreDiff =Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j])) 
                }
               
                // I need a sort function but i cant seem to get the user input which is making testing it frustrating. 
                // but the function would sort the values of the scoreDiffArr and find the lowest diff . after that it would match friend based on its score diff and display in modal
                if (scoreDiff <= match.comp){
					match.name = friends[i].name
					match.photo = friends[i].photo
					match.comp = scoreDiff
				} 
            }
            friends.push(userInput)

		 
		    res.json(match)
         })
    }
     