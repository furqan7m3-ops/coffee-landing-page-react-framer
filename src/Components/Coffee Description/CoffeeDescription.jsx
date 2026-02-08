import CoffeeBeansImg from "../../assets/coffee_beans.png";
import "./CoffeeDescription.css";
import {motion} from "framer-motion";
export default function CoffeeDescription(){
    return (
        <article className="coffee-description-section">
            <section className="coffee-description-text">
                <motion.h2 whileInView={{scale:[0,1.1, 1]}} transition={{delay:0.1,duration:1, ease:"easeInOut"}} className="section-heading">Discover the best coffee</motion.h2>
                <motion.p
                  whileInView={{scale:[0,1.1, 1]}} transition={{delay:0.4,duration:1, ease:"easeInOut"}}
                >Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</motion.p>
                <button className="cta-btn">Learn More</button>
            </section>

            <img src={CoffeeBeansImg} alt="coffee-beans-image" />
        </article>
    );
}