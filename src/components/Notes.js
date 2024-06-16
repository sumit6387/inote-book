import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function NoteItems() {
  const context = useContext(noteContext);
  const { notes } = context;
  console.log("=-=-=-=", notes);
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes?.map((note) => {
          return <NoteItem key={note?.id} note={note} />;
        })}
      </div>
    </>
  );
}

export default NoteItems;
