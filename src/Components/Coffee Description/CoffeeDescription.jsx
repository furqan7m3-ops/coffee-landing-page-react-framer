import CoffeeBeansImg from "../../assets/coffee_beans.png";
import "./CoffeeDescription.css";
export default function CoffeeDescription(){
    return (
        <article className="coffee-description-section">
            <section className="coffee-description-text">
                <h2 className="section-heading">Discover the best coffee</h2>
                <p>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
                <button className="cta-btn">Learn More</button>
            </section>

            <img src={CoffeeBeansImg} alt="coffee-beans-image" />
        </article>
    );
}