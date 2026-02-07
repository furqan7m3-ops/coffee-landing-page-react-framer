import "./CoffeeFlavor.css";
export default function CoffeeFlavor({ flavorName, price, ratio, img }) {
    return (
        <article className="coffee-flavor">
            <img src={img?.src} alt={img?.alt} />
            <div className="flavor-text">
                <h3 className="flavor-name">{flavorName}</h3>
                <p className="flavor-ratio">Coffee {ratio.coffee}% | Milk {ratio.milk}%</p>
                <p className="flavor-price">$ {price}</p>
                <button className="cta-btn">Order Now</button>
            </div>
        </article>
    );
}