import { React, useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/noteContext';
import NoteItem from './NoteItem.js';
import AddNote from './AddNote.js';

function Notes() {
    const { notes, getNote, editNote } = useContext(noteContext);
    useEffect(()=>{
        getNote();
    },[])

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
    }
    const ref = useRef(null)
    const refClose = useRef(null)
    
    const { addNote } = useContext(noteContext);
    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "default" });

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
        
    };

    // Handle form submit
    const onSubmit = (e) => {
        e.preventDefault();
         editNote(note.id, note.etitle, note.edescription, note.etag);
         refClose.current.click();
    };

    return (
        <>
        <AddNote/>
        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={onSubmit}>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
          <button type="submit" className="btn btn-primary">Update Note</button>
        </div>
      </form>
    </div>
  </div>
</div>

        <div className="row my-3">
            <h2 className="my-3">Your Notes</h2>
            <div className="container">
            {notes.length==0 && 'No notes to display'}
            </div>
            {notes.map((note) => (
            <NoteItem key={note._id} updateNote={updateNote} note={note}/>
            ))}
        </div>
        </>
    )
}

export default Notes