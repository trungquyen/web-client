import { BrowserRouter, Route, Routes } from "react-router-dom"
//import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify"
import Home from "../src/pages/Home"
import Login from "../src/pages/Login"
import Register from "../src/pages/Register"
import Search from "../src/pages/Search"
import ProductList from "./pages/ProductList";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";
import Success from "./pages/Success.jsx";

function App() {
  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products/:category" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<DetailProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
