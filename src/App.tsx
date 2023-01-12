import Navbar from "./components/Navbar";
import {ProductList }from "./components/ProductList";
import { User } from "./components/User";

function App() {
  return (
    <div className="container">
      <Navbar />
      <ProductList />
      <User 
        name="Benard"
        email="benard@gmail.com"
        age="18"
      />
    </div>
  );
}

export default App;
