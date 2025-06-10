import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/ServicesSection";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page content (everything between navbar and footer) */}
      <main className="flex-grow pt-[80px]"> {/* push down content below fixed navbar */}
        <Hero />
        <Services />
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}

export default App;
