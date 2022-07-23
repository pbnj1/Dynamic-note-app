// require express-done below
const express = require("express")

// require your routes - for the api -done below
const apiRoutes = require("./routes/apiRoutes");
// require you routes  - done below
const htmlRoutes = require("./routes/htmlRoutes");

// initialize the app -done below
const app = express()

// create a port - reference server.js files from activities in this module -done below
const PORT = process.env.PORT || 3001;

// set up body parsing and urlencoded form data -done below
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set up static -done below
app.use(express.static('public'));

//set up route middleware - activities 15 and 16, // activities 21 and 22 -done below?
app.use('/api', apiRoutes);
app.use('/', htmlRoutes); 


// start the server on the port - app.listen - 
// reference server.js files from activites in this module -done below
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
