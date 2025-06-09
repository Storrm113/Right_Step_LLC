import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
