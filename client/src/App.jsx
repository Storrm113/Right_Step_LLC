import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="bg-blue-600 text-white p-4 flex gap-4 justify-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/gallery" className="hover:underline">
          Gallery
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
