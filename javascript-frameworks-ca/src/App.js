import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Home } from "./pages/home/home";
import { Contact } from "./pages/contact/contact";
import { Cart } from "./pages/cart/cart";
import Footer from "./components/FooterBar";
import IndividualItem from "./pages/individualItem";
import Checkout from "./pages/checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<IndividualItem />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
