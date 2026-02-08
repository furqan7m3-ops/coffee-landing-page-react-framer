import featureData from "./FeatureData";
import BrandFeature from "../Coffee Brand Feature/BrandFeature";
import "./BrandFeatures.css";
import { useAnimationContext } from "../../Context/AnimationContext";
import {motion} from "framer-motion";
export default function BrandFeatures() {
    const {parentVariants} = useAnimationContext();
    return (
        <section className="section">
            <h2 className="section-heading">Why are we different?</h2>
            <p className="section-text">We don’t just make your coffee, we make your day!</p>
            <motion.div className="cards" variants={parentVariants} initial="hidden" whileInView="show" viewport={{amount:0.2, once:true}}>
                {
                    featureData.map(feature => <BrandFeature key={feature.id} {...feature} />)
                }
            </motion.div>
            <p className="section-text">Great ideas start with great coffee, Lets help you achieve that</p>
            <p className="section-text section-text--bold">Get started today</p>
            <button className="cta-btn">Join Us</button>
        </section>
    );
}