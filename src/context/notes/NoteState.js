import React, { useState, useContext } from "react";
import NoteContext from "./noteContext";
import alertContext from "../alert/alertContext";
import axios from "axios";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const context = useContext(alertContext);
  const { setAlert } = context;
  const token = localStorage.getItem("token");
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const fetchNotes = async () => {
    const data = await axios.get(`${host}/api/notes`, {
      headers: { Authorization: token },
    });
    console.log(data, "=-=-data=-=");
    if (data.data?.status) {
      setNotes(data.data?.data);
    }
  };

  const addNoteApi = async (payload) => {
    const data = await axios.post(`${host}/api/notes/addNote`, payload, {
      headers: { Authorization: token },
    });
    if (data.data?.status) {
      await fetchNotes();
    }
  };

  const deleteNoteApi = async (id) => {
    const data = await axios.delete(`${host}/api/notes/deleteNote/${id}`, {
      headers: { Authorization: token },
    });
    if (data.data?.status) {
      await fetchNotes();
    }
    setAlert({
      alertType: data.data?.status ? "success" : "danger",
      msg: data.data.msg,
    });
  };

  const updateNoteApi = async (id, payload) => {
    const data = await axios.put(`${host}/api/notes/editNote/${id}`, payload, {
      headers: { Authorization: token },
    });
    if (data.data?.status) {
      await fetchNotes();
    }
  };

  const addNote = (note) => {
    console.log(notes.map((e) => e.id));
    addNoteApi(note);
    // setNotes(
    //   notes.concat({
    //     ...note,
    //     id: Math.max(...notes.map((e) => e.id)) + 1,
    //   })
    // );
    console.log(notes);
  };
  const editNote = (id, note) => {
    updateNoteApi(id, note);
  };

  const deleteNote = (id) => {
    // setNotes(notes.filter((e) => e.id !== id));
    deleteNoteApi(id);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
