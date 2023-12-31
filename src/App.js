import logo from "./logo.svg";
import "./App.css";
import LoginRegister from "./User/LoginRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
