import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/shop";

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
