import Hero from "./components/Hero.jsx";
import HeroDashBoard from "./components/HeroDashBoard.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
