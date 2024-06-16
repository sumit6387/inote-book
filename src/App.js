import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
