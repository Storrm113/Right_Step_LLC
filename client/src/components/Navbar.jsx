import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 bg-opacity-80 text-white py-3 shadow-md flex justify-center">
      <div className="flex gap-8 text-lg font-medium">
        <Link to="/" className="hover:underline hover:text-gray-200 transition">
          Home
        </Link>
        <Link
          to="/gallery"
          className="hover:underline hover:text-gray-200 transition"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="hover:underline hover:text-gray-200 transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
