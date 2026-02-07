import featureData from "./FeatureData";
import BrandFeature from "../Coffee Brand Feature/BrandFeature";
export default function BrandFeatures() {
    return (
        <section className="section">
            <h2 className="section-heading">Why are we different?</h2>
            <p className="section-text">We don’t just make your coffee, we make your day!</p>
            <div className="cards">
                {
                    featureData.map(feature => <BrandFeature key={feature.id} {...feature} />)
                }
            </div>
        </section>
    );
}