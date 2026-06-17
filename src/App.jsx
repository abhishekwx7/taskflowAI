import Hero from "./components/Hero.jsx";
import HeroDashBoard from "./components/HeroDashBoard.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import Cta from "./components/Cta.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Cta />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
