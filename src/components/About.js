import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function About() {
  const a = useContext(noteContext);
  return (
    <>
      <h1>About {a.name}</h1>
    </>
  );
}

export default About;
