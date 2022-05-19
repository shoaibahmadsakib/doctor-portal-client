import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import ContactUs from "./pages/home/ContactUs";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";

import Reviews from "./pages/home/Reviews";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/Login/RequiredAuth";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About />
            </RequireAuth>
          }
        />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
