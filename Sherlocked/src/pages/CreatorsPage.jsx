import { creators } from '../data/cases';
import creatorsBg from '../assets/rules-bg.jpg';
import './CreatorsPage.css';

export default function CreatorsPage() {
  return (
    <div className="creators-page" style={{ backgroundImage: `url(${creatorsBg})` }}>
      <div className="creators-container">
        <div className="creators-header">
          <h1>THE CASE FILES</h1>
          <p className="subtitle">MEET THE CREATORS</p>
          <div className="header-divider"></div>
        </div>

        <div className="credits-section">
          <h2>👥 THE DETECTIVE SQUAD</h2>
          
          <div className="creators-grid">
            {creators.map((creator) => (
              <div key={creator.id} className="creator-card">
                <div className="creator-avatar">{creator.avatar}</div>
                <h3>{creator.name}</h3>
                <p className="role">{creator.role}</p>
                <p className="bio">{creator.bio}</p>
                <div className="skills">
                  {creator.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="philosophy-section">
          <h2>🎭 GAME PHILOSOPHY</h2>
          <div className="philosophy-content">
            <div className="philosophy-item">
              <h4>The Mystery</h4>
              <p>
                Each case in Sherlocked is crafted to challenge the mind and engage deductive reasoning. 
                We believe that a great puzzle isn't just about finding the right answer—it's about the journey 
                of uncovering clues, analyzing evidence, and experiencing that satisfying "aha!" moment.
              </p>
            </div>

            <div className="philosophy-item">
              <h4>The Experience</h4>
              <p>
                Set in a Victorian-inspired world, Sherlocked transports players to an era of elegant mystery 
                and sophisticated investigation. The atmosphere, typography, and design choices all work together 
                to create an immersive detective experience that feels both timeless and engaging.
              </p>
            </div>

            <div className="philosophy-item">
              <h4>The Challenge</h4>
              <p>
                Progressive difficulty ensures that each case becomes more complex than the last. New investigators 
                start with accessible puzzles while seasoned detectives face intricate challenges. Hints are available 
                for those who need guidance, encouraging learning and exploration rather than frustration.
              </p>
            </div>

            <div className="philosophy-item">
              <h4>The Community</h4>
              <p>
                Team-based investigation encourages collaboration and shared glory. The leaderboard tracks the best 
                detective teams, fostering friendly competition and community engagement. Every team, whether they solve 
                one case or all five, is part of the Sherlocked legacy.
              </p>
            </div>
          </div>
        </div>

        <div className="technical-section">
          <h2>⚙️ TECHNICAL SPECIFICATIONS</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h4>Frontend</h4>
              <ul>
                <li>React 18+</li>
                <li>React Router v6</li>
                <li>CSS3 Grid & Flexbox</li>
                <li>React Hooks</li>
              </ul>
            </div>

            <div className="tech-card">
              <h4>Storage</h4>
              <ul>
                <li>Browser localStorage</li>
                <li>Team data persistence</li>
                <li>Game progress tracking</li>
                <li>Score management</li>
              </ul>
            </div>

            <div className="tech-card">
              <h4>Features</h4>
              <ul>
                <li>5 Mystery Cases</li>
                <li>Progressive Difficulty</li>
                <li>Hint System (20pt penalty)</li>
                <li>Real-time Scoring</li>
              </ul>
            </div>

            <div className="tech-card">
              <h4>Design</h4>
              <ul>
                <li>Victorian Aesthetic</li>
                <li>Dark Theme</li>
                <li>Gold Accents (#d4af37)</li>
                <li>Responsive Layout</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="support-section">
          <h2>📧 SUPPORT & FEEDBACK</h2>
          <div className="support-content">
            <p>
              Have feedback about Sherlocked? Found a case too difficult—or too easy? 
              We'd love to hear from you! Your insights help us create better mysteries 
              and improve the detective experience.
            </p>
            <p className="emphasis">
              For feature requests, bug reports, or partnership inquiries, 
              please reach out through our official channels.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <p className="copyright">
            © 2024 Sherlocked. All mysteries reserved. 🔍
          </p>
          <p className="version">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
