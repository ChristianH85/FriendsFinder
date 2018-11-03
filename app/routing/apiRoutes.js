console.log("api here")
let friends = require('../data/friends.js')

console.log(friends)

module.exports = function(app){
        app.get("/api/friends", function (req, res) {
            console.log(friends)
            res.json(friends)
        })
    
        app.post("api/friends", function(req, res){
            console.log("post here")
            console.log(req)
            let userInput = req.body
            console.log(userInput)
            let scoreDiff = 0
            let scoreDiffArr= []
            for(let i =0; i = friends.length; i++){
                for(let j = 0; i < 10; i++ ){
                    scoreDiff = Math.abs(friends[i].scores[j] - newFriend.scores[j]) 
                }
                scoreDiffArr.push(scoreDiff)
                // I need a sort function but i cant seem to get the user input which is making testing it frustrating. 
                // but the function would sort the values of the scoreDiffArr and find the lowest diff . after that it would match friend based on its score diff and display in modal 
            }
        })
    }
     