import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white w-full py-4 fixed bottom-0 left-0">
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://www.facebook.com/profile.php?id=61551114050792"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/right_step_llc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  )
}

export default Footer
