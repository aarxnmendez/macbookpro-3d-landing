import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Features from "./components/Features";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
    </main>
  );
};
export default App;
