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
    console.log("inside the getNotes function")
    return this.read().then((notes) => {
      // parse the notes and return them
      return readFileAsync('db/db.json', JSON.parse(notes));
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
    this.getNotes(notes).then((notes) => {
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
    // then go through the notes to find the one with the matching id
    // take these updated/filtered notes - write them to file using write()
  }
}

module.exports = new Store();