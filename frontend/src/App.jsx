import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const About = lazy(() => import("./pages/About"));
const Cart = lazy(() => import("./pages/Cart"));
const Login = lazy(() => import("./pages/Login"));
const Order = lazy(() => import("./pages/Order"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
const Product = lazy(() => import("./pages/Product"));
const Contact = lazy(() => import("./pages/Contact"))
const Verify = lazy(() => import("./pages/Verify"))
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from "./assets/frontend_assets/assets";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col justify-between h-lvh">
      <div className="h-auto">
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
      <Suspense fallback={<div className="w-full flex justify-center items-center h-lvh"><img src={assets.loading_gif} alt="loader" className="w-16 h-16"/></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </Suspense>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
