import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import CoffeeDescription from "./Components/Coffee Description/CoffeeDescription";
import CoffeeFlavors from "./Components/Coffee Flavors/CoffeeFlavors";
import BrandFeatures from "./Components/Coffee Brand Features/BrandFeatures";
import AnimationProvider from "./Context/AnimationProvider";
export default function App() {
  return (
    <>
      <div className="layout">
        <NavBar />
        <HeroSection />
      </div>
      <CoffeeDescription />

      <AnimationProvider>
        <CoffeeFlavors />
        <BrandFeatures />
      </AnimationProvider>

    </>
  );
}