import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Product } from "./components/Product";
import { CreateProduct } from "./pages/CreateProduct";
import { Payment } from "./pages/Payment";
import { ProductList } from "./pages/ProductList";
import Todo from "./pages/Todo";
import { User } from "./pages/User";

function App() {
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  return (
    <div className="container">
      <Navbar totalQuantity={totalQuantity} />

      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              setTotalQuantity={setTotalQuantity}
              total={totalQuantity}
            />
          }
        />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/todo" element={<Todo />} />

        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
