import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import Login from "./auth/login.jsx";
import Register from "./auth/register.jsx";
import Forget from "./auth/forget.jsx";
import About from "./pages/about.jsx";

import Navbar from "./components/Navbar.jsx";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-sage-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-5">
        <div className="font-heading font-bold text-text-primary text-4xl">
          <p>Simple Life sa Nayon, Simula sa Bahay Kubo.</p>
        </div>
        <p className="font-body text-text-secondary text-base mt-2 mb-3.5 md:text-lg">
          Mag-tanim ng gulay, mag-alaga ng hayop, at bumuo ng tahimik na buhay
          sa sarili mong bukid. Iwanan ang ingay ng lungsod at maranasan ang
          totoong buhay-nayon sa iyong browser.
        </p>
        <div className="flex flex-wrap">
          <button
            className="btn btn-primary bg-sage-500 border-none shadow-none hover:bg-sage-700 mr-2"
            onClick={() => navigate("/login")}
          >
            Start your journey
            <ArrowRight />
          </button>
          <button
            className="btn bg-cream-50 text-text-primary border-sage-300 hover:bg-cream-200"
            onClick={() => navigate("/about")}
          >
            <Compass color="#829875" />
            About / News
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget" element={<Forget />} />
    </Routes>
  );
}

export default App;
