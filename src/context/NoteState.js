import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesIntial = [
  {
    "_id": "6863d935837f90fb131fc8b8",
    "user": "686296b61744e6c191d26516",
    "title": "My Not2es",
    "description": "This is my first nite",
    "tag": "personal",
    "date": "2025-07-01T12:48:53.055Z",
    "__v": 0
  },
  {
    "_id": "6863d935837f90fb131fc8b8",
    "user": "686296b61744e6c191d26516",
    "title": "My Not2es",
    "description": "This is my first nite",
    "tag": "personal",
    "date": "2025-07-01T12:48:53.055Z",
    "__v": 0
  },
  {
    "_id": "6863d935837f90fb131fc8b8",
    "user": "686296b61744e6c191d26516",
    "title": "My Not2es",
    "description": "This is my first nite",
    "tag": "personal",
    "date": "2025-07-01T12:48:53.055Z",
    "__v": 0
  },
  {
    "_id": "6863d935837f90fb131fc8b8",
    "user": "686296b61744e6c191d26516",
    "title": "My Not2es",
    "description": "This is my first nite",
    "tag": "personal",
    "date": "2025-07-01T12:48:53.055Z",
    "__v": 0
  },
  {
    "_id": "6863d935837f90fb131fc8b8",
    "user": "686296b61744e6c191d26516",
    "title": "My Not2es",
    "description": "This is my first nite",
    "tag": "personal",
    "date": "2025-07-01T12:48:53.055Z",
    "__v": 0
  },
  {
    "_id": "6863d935837f90fb131fc8b8",
    "user": "686296b61744e6c191d26516",
    "title": "My Not2es",
    "description": "This is my first nite",
    "tag": "personal",
    "date": "2025-07-01T12:48:53.055Z",
    "__v": 0
  },
];
    const [notes, setnotes] = useState(notesIntial);
    return (
        
        <noteContext.Provider value={{notes, setnotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;