import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Product } from "./components/Product";
import { Payment } from "./pages/Payment";
import { ProductList } from "./pages/ProductList";
import { User } from "./pages/User";

function App() {
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  return (
    <div className="container">
      <Navbar totalQuantity={totalQuantity} />

      <Routes>
        <Route
          path="/"
          element={<ProductList setTotalQuantity={setTotalQuantity} total={totalQuantity} />}
        />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route
          path="/payment"
          element={<Payment />}
        />
      </Routes>
    </div>
  );
}

export default App;
