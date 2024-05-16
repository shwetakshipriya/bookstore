import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Cart from "./components/Cart";
import { useCart } from "./context/CartProvider";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [authUser, setAuthUser] = useAuth();
  const { cartItems } = useCart();
  
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
