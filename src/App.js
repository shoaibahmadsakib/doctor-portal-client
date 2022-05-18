import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reviews from "./pages/Reviews";
/* This example requires Tailwind CSS v2.0+ */

function App() {
  return (
    <div>
      <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/appointment" element={<Appointment/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/reviews" element={<Reviews/>}/>
         <Route path="/contact" element={<ContactUs/>}/>

       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
