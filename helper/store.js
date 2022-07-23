const fs = require('fs');
const util = require('util');
const uuid = require('./uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync('db/db.json', 'utf8');
  }

  write(notes) {
    return writeFileAsync('db/db.json', JSON.stringify(notes));
  }

  getNotes() {
     return this.read().then((notes) => {
      let formatedNotes;
      try{
        formatedNotes = [].concat(JSON.parse(notes))
      } catch(err){
        formatedNotes = []
      }
      return formatedNotes
      // parse the notes and return them
      
    })
  }

  addNote(notes) {
    console.log("inside the addNotes function")
    const { title, text } = notes;
 
      const newNote = { 
        title,
        text,
        id: uuid() };    // give note an id
    
    // get all notes with getNotes()
    this.getNotes().then((notes) => {
      
      notes.push(newNote);
      console.log("inside the addNotes function");
      return write(notes);
    })

  }

  removeNote(id) {
    // get all the notes use getNotes()
    this.getNotes().then((notes) =>{
      for (let i =0; i < notes.length; i++){
        if(id === notes[i].id){
          const idNotes = notes.filter(id)
         return this.write(idNotes);
        }
      }

    })
  }
}

module.exports = new Store();