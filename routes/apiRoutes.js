// require router from express - activity 21 and 22,
// specifically in the routes in activity 22  -done below
const apiRoutes = require("express").Router();

// require store from the helpers folder - done below ?
const store = require("../helper/store");

// GET ALL THE NOTES //
apiRoutes.get("/notes", (req, res) => {
  console.info(`${req.method} request received to get notes`);
  store.getNotes().then((notes) => res.json(notes));
  // then take the notes and return them with res.json
  // readFromFile('./db.json').then((data) => res.json(JSON.parse(data)))
});

// POST A NEW NOTE //
apiRoutes.post("/notes", (req, res) => {
  console.info(`${req.method} request received inside apiRoutes.post`);
  store.addNote(req.body);
  res.json(req.body);
  // addNote(req.body)
  // then return note with res.json
});

// DELETE A NOTE //
apiRoutes.delete("notes/:id", (req, res) => {
  store.removeNote(req.params.id)
res.json(`Your note has been successfully deleted`)
  // give a status letting you know it's been deleted
});

// export your router -done below
module.exports = apiRoutes;
