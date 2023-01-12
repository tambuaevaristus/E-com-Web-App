import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Product } from "./components/Product";
import { ProductList } from "./pages/ProductList";
import { User } from "./pages/User";

function App() {
  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/user"
          element={<User name="Benard" email="benard@gmail.com" age="18" />}
        />
      </Routes>
    </div>
  );
}

export default App;
