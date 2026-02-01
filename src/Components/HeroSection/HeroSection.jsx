import "./HeroSection.css";
import {motion, scale} from "framer-motion";

const heroAnimations={
    initial:{scale:0},
    animate:{scale:1}
};
export default function HeroSection() {
    return (
        <article className="hero">
            <motion.div className="hero-content" variants={heroAnimations} initial="initial" animate="animate" transition={{duration:1}}>
                <p className="hero-tagline">We've got your morning covered with</p>
                <h1 className="hero-title">Coffee</h1>
                <p className="hero-description">It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
                <motion.button className="cta-btn hero-btn"
                 animate={{scale:[1,0.9,1]}}
                 transition={{repeat:Infinity}}
                >Order Now</motion.button>
            </motion.div>
        </article>
    );
}