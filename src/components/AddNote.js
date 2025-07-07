import { React, useContext, useState } from 'react';
import noteContext from '../context/noteContext';

function AddNote() {
  const { addNote } = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  // Handle input change
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const onSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" }); // reset fields
  };

  return (
    <div className="container my-3">
      <h2 className="my-3">Add Note</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add Note</button>
      </form>
    </div>
  );
}

export default AddNote;
