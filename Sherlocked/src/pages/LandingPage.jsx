import { Link } from 'react-router-dom';
import { mysteryCases } from '../data/cases';
import heroBg from '../assets/hero-bg.jpg';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">UNRAVEL THE MYSTERY</h2>
            
          </div>
          <Link to="/register" className="cta-button">
          BEGIN INVESTIGATION
        </Link>
          

          <div className="divider-line"></div>
          
          
        </div>

        <div className="hero-image-section">
          
          <div className="hero-image">🔍</div>
        </div>

        
        {/* CTA Section */}
    
     
      </section>

      
    </div>
  );
}
