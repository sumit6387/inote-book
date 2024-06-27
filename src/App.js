import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/Alert";

function App() {
  return (
    <AlertState>
      <NoteState>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
            <Routes>
              <Route path="/about" element={<About />}></Route>
            </Routes>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
            <Routes>
              <Route path="/signup" element={<Signup />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </AlertState>
  );
}

export default App;
