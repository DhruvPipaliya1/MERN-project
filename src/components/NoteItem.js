import { Resct, useContext} from 'react'
import noteContext from '../context/noteContext';


function NoteItem(props) {
  const {note, updateNote} = props;
  const { deleteNote } = useContext(noteContext);
  return (
    <>
      <div className="col-md-3">
    <div className="card my-3" style={{width: '18rem'}}>
        <div className="card-body">
          <div className="d-flex align-item-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash mx-2" onClick={() => {deleteNote(note._id); props.showAlert("Deleted successfully", "success")}}></i>
            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {updateNote(note); }}></i>
          </div>
            <p className="card-text">{note.description}</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default NoteItem