import { React, useContext } from 'react'
import noteContext from '../context/noteContext';
import NoteItem from './NoteItem.js';

function Notes() {
    const { notes, setNotes } = useContext(noteContext);
    return (
        <div className="row my-3">
            <h2 className="my-3">Your Notes</h2>
            {notes.map((note) => (
            <NoteItem note={note}/>
            ))}
        </div>
    )
}

export default Notes