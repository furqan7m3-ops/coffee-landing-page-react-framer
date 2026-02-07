import "./BrandFeature.css";
export default function BrandFeature({featureTitle, featureDescription, img}){
    return (
        <section className="feature card">
            <img src={img?.src} alt={img?.alt} />
            <div className="card-content">
                <h3 className="card-title">{featureTitle}</h3>
                <p className="card-text">{featureDescription}</p>
            </div>
        </section>
    );
}