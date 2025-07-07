import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
    const notesIntial = [];
    const [notes, setnotes] = useState(notesIntial);

    const getNote = async() => {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2Mjk2YjYxNzQ0ZTZjMTkxZDI2NTE2In0sImlhdCI6MTc1MTMwMzkwM30.6jOej0TM-58cYEI1TkcZynxdIqNJE86kPeXun6wGFAE'
        },
      }); 
      const json=await response.json()
      console.log(json)
      setnotes(json)
    }

    //Add a Note
    const addNote = async(title, description, tag) => {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2Mjk2YjYxNzQ0ZTZjMTkxZDI2NTE2In0sImlhdCI6MTc1MTMwMzkwM30.6jOej0TM-58cYEI1TkcZynxdIqNJE86kPeXun6wGFAE'
        },
        body: JSON.stringify({title, description, tag})
      });
      const note = await response.json();
      setnotes(notes.concat(note))
    }
    //Delete a note
    const deleteNote = async(id) => {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2Mjk2YjYxNzQ0ZTZjMTkxZDI2NTE2In0sImlhdCI6MTc1MTMwMzkwM30.6jOej0TM-58cYEI1TkcZynxdIqNJE86kPeXun6wGFAE'
        },
      });
      const json = response.json();
      console.log(json)
      console.log("Deleting Note with id" + id);
      const newNote = notes.filter(note => note._id !== id);
      setnotes(newNote);
    }
    //Edit a note
    const editNote = async(id, title, description, tag) => {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2Mjk2YjYxNzQ0ZTZjMTkxZDI2NTE2In0sImlhdCI6MTc1MTMwMzkwM30.6jOej0TM-58cYEI1TkcZynxdIqNJE86kPeXun6wGFAE'
      },
      body: JSON.stringify({title, description, tag})
    });
    let newNotes = JSON.parse(JSON.stringify(notes))
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id == id){
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
        
      }
      setnotes(newNotes);
    }


    return (
        
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote, getNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;