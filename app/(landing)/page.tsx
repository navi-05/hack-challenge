import Hero from "./components/hero";
import About from "./components/about";
import Footer from './components/footer'
import Features from "./components/features";
import HowToUse from "./components/howtouse";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <HowToUse />
      <Footer />
    </div>
  )
}
