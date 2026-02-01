import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import CoffeeDescription from "./Components/Coffee Description/CoffeeDescription";
import CoffeeFlavors from "./Components/Coffee Flavors/CoffeeFlavors";
export default function App() {
  return (
    <>
      <div className="layout">
        <NavBar />
        <HeroSection />
      </div>
      <CoffeeDescription />
      <CoffeeFlavors />
    </>
  );
}