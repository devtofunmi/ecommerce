import Homepage from "./pages/Homepage";
import commerce from "./lib/commerce";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:product" element={<ProductInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
