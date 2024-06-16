import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      id: 1,
      title: "Test",
      description: "Test desc",
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  const addNote = (note) => {
    console.log(notes.map((e) => e.id));
    setNotes(
      notes.concat({
        ...note,
        id: Math.max(...notes.map((e) => e.id)) + 1,
      })
    );
    console.log(notes);
  };
  const editNote = (id, note) => {};

  const deleteNote = (id) => {
    setNotes(notes.filter((e) => e.id !== id));
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
