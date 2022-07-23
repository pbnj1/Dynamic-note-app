// require router from express, fs, and db file
const apiRoutes = require("express").Router();
const fs = require("fs");
let db = require("../db/db.json");


//set up api get and parsed notes 
apiRoutes.get("/notes", async (req, res) => {
  db = JSON.parse(fs.readFileSync("./db/db.json"));
  res.json(db);
});


//set up api post and stringified notes
apiRoutes.post("/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: Math.floor(Math.random() * 999),
  };

  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
    if (err) throw err;
  });
  res.json(req.body);

});

//set up api delete and re-write new notes
apiRoutes.delete("/notes/:id", (req, res) => {
  let newNotes = [];
  for (let i = 0; i < db.length; i++) {
    if (db[i].id != req.params.id) {
      newNotes.push(db[i]);
    }
  }
  db = newNotes;
  console.log(db);
  fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
    if (err) throw err;
  });
  res.json(req.body);

});

//export the router
module.exports = apiRoutes;
