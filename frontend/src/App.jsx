import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/add" element={<AddProduct />} />
        <Route exact path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
