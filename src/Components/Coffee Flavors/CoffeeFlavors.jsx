import CoffeeFlavor from "../Coffee Flavor/CoffeeFlavor";
import CoffeeFlavorsData from "./CoffeeFlavorsData";
import "./CoffeeFlavors.css";
import CoffeeBlastImg from "../../assets/coffee_blast.png";
export default function CoffeeFlavors() {
    return (
        <article className="section coffee-flavors-section">
            <img className="coffee-blast-img" src={CoffeeBlastImg} alt="coffee-blast-image" />
            <h2 className="section-heading coffee-tagline">Enjoy a new blend of coffee style</h2>
            <p className="section-text">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
            <div className="coffee-flavors">
                {
                    CoffeeFlavorsData.map((flavor) => <CoffeeFlavor {...flavor} />)
                }
            </div>
        </article>
    );
}


