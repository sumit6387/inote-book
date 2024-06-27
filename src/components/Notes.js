import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import alertContext from "../context/alert/alertContext";

function NoteItems() {
  const context = useContext(noteContext);
  const { notes, fetchNotes, editNote } = context;
  const alertCntx = useContext(alertContext);
  const { setAlert } = alertCntx;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
    fetchNotes();
  }, []);

  const handleClick = (e) => {
    console.log("Hi", note);
    editNote(note._id, note);
    closeRef.current.click();
    setAlert({ alertType: "success", msg: "Note updated successfully!!" });
  };

  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const updateNote = (currentNote) => {
    setNote(currentNote);
    buttonRef.current.click();
  };
  const buttonRef = useRef(null);
  const closeRef = useRef(null);

  return (
    <>
      <AddNote />
      <button
        ref={buttonRef}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                    value={note.title}
                    name="title"
                    placeholder="Enter title"
                    minLength={5}
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
                    value={note.description}
                    name="description"
                    placeholder="Enter description"
                    minLength={5}
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
                    value={note.tag}
                    name="tag"
                    placeholder="Enter tag"
                    minLength={5}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={closeRef}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={note.title.length < 5 || note.description.length < 5}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes?.map((note) => {
          return (
            <NoteItem key={note?._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
}

export default NoteItems;
