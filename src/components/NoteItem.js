import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function NoteItem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className=" col-md-3 col-sm-12 card mx-3 my-3">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <h5 className="card-title">{note.title}</h5>
          </div>
          <div className="col-md-2 col-sm-2 mx-1">
            <span className="badge bg-primary">{note.tag}</span>
          </div>
          <div className="col-md-4 col-sm-4">
            <i
              className="fa-solid fa-pen-to-square mx-1"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
            <i
              className="fa-solid fa-trash mx-1"
              onClick={() => deleteNote(note._id)}
            ></i>
          </div>
        </div>
        <p className="card-text">{note.description}</p>
      </div>
    </div>
  );
}

export default NoteItem;
