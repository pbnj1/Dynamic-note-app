// require router from express - activity 21 and 22,
// specifically in the routes in activity 22  -done below
const apiRoutes = require("express").Router();
// const { json } = require("express");
const fs = require("fs")
// const storedNotes = require('./noteStore/noteStore.json');


// require store from the helpers folder - done below ?
//const store = require("../helper/store");
let noteStore = require("../noteStore/noteStore.json")
// GET ALL THE NOTES //
apiRoutes.get("/notes",async (req, res) => {

  noteStore = JSON.parse(fs.readFileSync("./noteStore/noteStore.json"))
  console.log(noteStore)
  res.json(noteStore)
  // let records = await store.getNotes()
  //  console.info(`${req.method} request received to get notes ${records}`);
  
  //.then((notes) => res.json(notes));
  // then take the notes and return them with res.json
  // readFromFile('./noteStore.json').then((data) => res.json(JSON.parse(data)))
});

// POST A NEW NOTE //
apiRoutes.post("/notes", (req, res) => {
  console.info(`${req.method} request received inside apiRoutes.post`);
  let newNote = {
    title: req.body.title,
    text:req.body.text,
    id: Math.floor(Math.random()*999)
  }
 noteStore.push(newNote)
 console.log(noteStore)
 fs.writeFileSync("./noteStore/noteStore.json",JSON.stringify(noteStore),function(err){
    if(err) throw err;
 })
  res.json(req.body);
  // addNote(req.body)
  // then return note with res.json
});

// DELETE A NOTE //
apiRoutes.delete("/notes/:id", (req, res) => {
  let newNotes = []
  for(let i=0;i<noteStore.length;i++){
    if(noteStore[i].id  != req.params.id){
      newNotes.push(noteStore[i])
    }
  }
 noteStore = newNotes
 console.log(noteStore)
 fs.writeFileSync("./noteStore/noteStore.json",JSON.stringify(noteStore),function(err){
    if(err) throw err;
 })
  res.json(req.body);
  // give a status letting you know it's been deleted
});

// export your router -done below
module.exports = apiRoutes;
