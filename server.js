const express = require('express');
const path = require('path')

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    console.log("success")
    
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
  
  require("./app/routing/htmlRoutes.js");
  
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });