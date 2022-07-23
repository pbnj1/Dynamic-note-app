// require path 
const path = require('path');

// rquire router from express 
const router = require('express').Router();

// set up a route for /notes that responds with the notes.html file 
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// for any other routes, using * as the path, you can respond with the index.html file 
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;