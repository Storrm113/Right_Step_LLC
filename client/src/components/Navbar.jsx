import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaImages,
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import logo from "../img/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">
        {/* Top Row: Logo and Social Links */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Right Step Logo"
              className="h-10 w-auto max-w-[180px]"
            />
          </Link>

          {/* Social Links */}
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=61551114050792"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
              title="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/right_step_llc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Hamburger Toggle */}
        <div className="mt-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl bg-white text-blue-600 p-2 rounded shadow hover:bg-blue-100 transition"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Collapsible Menu */}
      {menuOpen && (
        <div className="px-6 pb-4 flex flex-col gap-4 bg-blue-600">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded shadow hover:bg-blue-100 transition"
            title="Go to Home"
          >
            <FaHome />
            Home
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded shadow hover:bg-blue-100 transition"
            title="Go to Contact"
          >
            <FaEnvelope />
            Contact
          </Link>
          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded shadow hover:bg-blue-100 transition"
            title="View Our Gallery"
          >
            <FaImages />
            Gallery
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
