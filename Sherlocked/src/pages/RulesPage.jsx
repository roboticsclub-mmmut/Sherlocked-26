import { useNavigate } from 'react-router-dom';
import rulesBg from '../assets/rules-bg.jpg';
import './RulesPage.css';

export default function RulesPage() {
  const navigate = useNavigate();

  const handleBeginInvestigation = () => {
    navigate('/game');
  };

  return (
    <div className="rules-page" style={{ backgroundImage: `url(${rulesBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="rules-container">
        <div className="rules-header">
          <h1>📋 RULES & REGULATIONS</h1>
          <p className="subtitle">INVESTIGATOR'S CODE OF CONDUCT</p>
          <div className="header-divider"></div>
          <button className="scroll-down-btn" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            <span className="arrow">↓</span>
          </button>
        </div>

        <div className="rules-content">
          <div className="rules-section">
            <h2>📖 ABOUT SHERLOCKED</h2>
            <p className="section-text">
              Embark on a journey shrouded in mystery and intrigue. Channel your inner detective as you delve into the enigmatic world of Sherlocked. Unravel puzzles, decipher clues, and unlock hidden secrets as you navigate through a series of challenges. Dare to step into the shoes of Holmes himself and immerse yourself in the ultimate quest for answers. Are you ready to uncover the truth and unravel the mysteries that await? Join us for an unforgettable adventure where every twist and turn brings you closer to unlocking the final secrets of Sherlocked.
            </p>
          </div>

          <div className="rules-section">
            <h2>✅ ELIGIBILITY</h2>
            <ol className="rules-list">
              <li><strong>Team Size:</strong> Each team must consist of exactly 4 members.</li>
              <li><strong>Technical Requirements:</strong> All team members must possess a properly functioning laptop with a battery charge of at least 1-2 hours for Rounds 01 & 02, which will be conducted in offline mode.</li>
              <li><strong>Identification:</strong> All team members must carry their original College ID card during all the rounds.</li>
            </ol>
          </div>

          <div className="rules-section">
            <h2>🎮 ROUND WISE DETAILS</h2>
            
            <div className="round-detail">
              <h3>Round 01: Multiple Choice Quiz</h3>
              <ol className="rules-list">
                <li><strong>Description:</strong> In this round, you will encounter multiple-choice questions (MCQs) via an online Quizzing Platform, with a 30-minute time limit for completion. These questions encompass various topics, including Quantitative Analysis, Reasoning, Verbal Ability, and General Science. Details regarding the Quiz will be shared one day prior to the event.</li>
                <li><strong>Scoring:</strong> Participants will earn positive marks for correct answers, with no negative marking for incorrect or unattempted questions.</li>
                <li><strong>Qualifying Criteria:</strong> The top 25 Teams based on the obtained score will advance to the next round.</li>
                <li><strong>Score Tie:</strong> In case of tied scores, the time taken to complete the quiz will be considered.</li>
              </ol>
            </div>

            <div className="round-detail">
              <h3>Round 02: Onsite Round</h3>
              <ol className="rules-list">
                <li><strong>Description:</strong> This will be an onsite round, offering an opportunity to test your Virtual Presence of Mind in our in-house-built quiz platform. Further details will be provided on-site at the time of the event.</li>
                <li><strong>Scoring:</strong> A leaderboard will be maintained based on the levels completed in this round, along with the time of completion.</li>
                <li><strong>Qualifying Criteria:</strong> The top 5 Teams based on the obtained score (Leaderboard Position) will proceed to the next round.</li>
                <li><strong>Important Note:</strong> In the event of any technical issues during the round, the match may be paused and resumed once the issue is resolved.</li>
              </ol>
            </div>

            <div className="round-detail">
              <h3>Final Round: Mystery Solving</h3>
              <ol className="rules-list">
                <li><strong>Description:</strong> It's time to awaken the detective within you as a mystery awaits to be solved. Various clues will be hidden throughout the campus, and by following these clues, you must uncover the mystery.</li>
                <li><strong>Winning Criteria:</strong> The team that successfully discovers the treasure first within the allotted time will be declared the winner.</li>
              </ol>
            </div>
          </div>

          <div className="rules-section rules-highlight">
            <h2>⚠️ IMPORTANT NOTES</h2>
            <ol className="highlight-list">
              <li>Kindly ensure accurate completion of all form fields, including your name, email, and contact number, to facilitate communication for subsequent rounds.</li>
              <li>In the event of conflicts or uncertainties, final decisions will be made by the Robotics Club at MMMUT Gorakhpur.</li>
              <li>Kindly ensure to regularly check our social media handle for all the updates.</li>
            </ol>
          </div>
        </div>

        <button className="btn-begin-investigation" onClick={handleBeginInvestigation}>
          BEGIN INVESTIGATION
        </button>
      </div>
    </div>
  );
}
