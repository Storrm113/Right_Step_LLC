import Navbar from "../components/Navbar";
import bg from "../img/Background.png";

const Home = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header row with company name and nav */}
      <header className="w-full flex items-center justify-between px-6 py-6 border-b border-white bg-black bg-opacity-50">
        <h1 className="text-4xl font-light italic font-archivo">
          Right Step Professional Services LLC
        </h1>
        <Navbar />
      </header>
    </div>
  );
};

export default Home;
