import "./BrandFeature.css";
import { useAnimationContext } from "../../Context/AnimationContext";
import {motion} from "framer-motion";

export default function BrandFeature({featureTitle, featureDescription, img}){
    const {childVariants} = useAnimationContext();
    return (
        <motion.section className="feature card" variants={childVariants}>
            <img src={img?.src} alt={img?.alt} />
            <div className="card-content">
                <h3 className="card-title">{featureTitle}</h3>
                <p className="card-text">{featureDescription}</p>
            </div>
        </motion.section>
    );
}