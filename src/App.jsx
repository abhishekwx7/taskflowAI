import Hero from "./components/Hero.jsx";
import HeroDashBoard from "./components/HeroDashBoard.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";

function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  );
}

export default App;
