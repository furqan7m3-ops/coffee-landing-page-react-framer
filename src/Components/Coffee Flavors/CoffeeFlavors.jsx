import CoffeeFlavor from "../Coffee Flavor/CoffeeFlavor";
import CoffeeFlavorsData from "./CoffeeFlavorsData";
import "./CoffeeFlavors.css";
import CoffeeBlastImg from "../../assets/coffee_blast.png";
import { useAnimationContext } from "../../Context/AnimationContext";
import {motion} from "framer-motion";
export default function CoffeeFlavors() {
    const {parentVariants} = useAnimationContext();
    return (
        <article className="section coffee-flavors-section">
            <img className="coffee-blast-img" src={CoffeeBlastImg} alt="coffee-blast-image" />
            <h2 className="section-heading coffee-tagline">Enjoy a new blend of coffee style</h2>
            <p className="section-text">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
            
                <motion.div className="cards" variants={parentVariants} initial="hidden" whileInView="show" viewport={{amount:0.2, once:true}}>
                    {
                        CoffeeFlavorsData.map((flavor) => <CoffeeFlavor key={flavor.id} {...flavor} />)
                    }
                </motion.div>
        </article>
    );
}


