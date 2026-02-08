import "./CoffeeFlavor.css";
import { useAnimationContext } from "../../Context/AnimationContext";
import {motion} from "framer-motion";
export default function CoffeeFlavor({ flavorName, price, ratio, img }) {
    const {childVariants} = useAnimationContext();
    return (
        <motion.article className="coffee-flavor" variants={childVariants}>
            <img src={img?.src} alt={img?.alt} />
            <div className="flavor-text">
                <h3 className="flavor-name">{flavorName}</h3>
                <p className="flavor-ratio">Coffee {ratio.coffee}% | Milk {ratio.milk}%</p>
                <p className="flavor-price">$ {price}</p>
                <button className="cta-btn">Order Now</button>
            </div>
        </motion.article>
    );
}