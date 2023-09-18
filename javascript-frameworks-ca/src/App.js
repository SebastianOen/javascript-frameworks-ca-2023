import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/nav";
import { useEffect, useState } from "react";

function App() {
  /*  const url = "https://api.noroff.dev/api/v1/online-shop";

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
    };

    fetchData().catch(console.error);
  }, []);
  const rows = data[0]?.map((result, index) => (
    <ArticleRow key={index} {...result} />
  )); */

  return (
    <div className="App">
      <div className="App">
        <Navbar>
          <Routes>
            <Route path="/" />
            <Route path="/cart" />
          </Routes>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
