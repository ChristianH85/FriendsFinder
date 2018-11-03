const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('app/public'));
app.use(bodyParser.text());


  
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);
  
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });