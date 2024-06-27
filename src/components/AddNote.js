import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import alertContext from "../context/alert/alertContext";

function AddNote() {
  const context = useContext(noteContext);
  const alertCntx = useContext(alertContext);
  const { setAlert } = alertCntx;
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(note);
    addNote(note);
    setAlert({ alertType: "success", msg: "Note added successfully" });
    setNote({ title: "", description: "", tag: "" });
  };
  return (
    <div className="container my-3">
      <h2>Add Note</h2>
      <div className="row">
        <div className="col-md-8 col-sm-8">
          <form className="my-3">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={onChange}
                name="title"
                placeholder="Enter title"
                minLength={5}
                value={note.title}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                onChange={onChange}
                name="description"
                placeholder="Enter description"
                minLength={5}
                value={note.description}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Tag
              </label>
              <input
                type="text"
                className="form-control"
                id="tag"
                onChange={onChange}
                name="tag"
                placeholder="Enter tag"
                value={note.tag}
                minLength={5}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
              disabled={note.title.length < 5 || note.description.length < 5}
            >
              Add Note
            </button>
          </form>
        </div>
        <div className="col-md-4 col-sm-4"></div>
      </div>
    </div>
  );
}

export default AddNote;
