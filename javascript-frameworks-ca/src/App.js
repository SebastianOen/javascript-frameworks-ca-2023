import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/nav";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
