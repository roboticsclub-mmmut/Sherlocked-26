import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mysteryCases } from '../data/cases';
import './GameInterface.css';

export default function GameInterface({ teamData, gameProgress, setGameProgress }) {
  const navigate = useNavigate();
  
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [hints, setHints] = useState([]);
  const [score, setScore] = useState(0);
  const [levelCompleted, setLevelCompleted] = useState(false);
  const [showFinalResults, setShowFinalResults] = useState(false);

  useEffect(() => {
    if (!teamData) {
      navigate('/register');
      return;
    }

    if (gameProgress) {
      setCurrentLevel(gameProgress.currentLevel || 0);
      setScore(gameProgress.totalScore || 0);
    }
  }, [teamData, gameProgress, navigate]);

  const currentCase = mysteryCases[currentLevel];
  const levelScore = currentCase.baseScore - (hints.length * 20);

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) {
      setFeedback('Please enter your answer.');
      return;
    }

    const isCorrect = userAnswer.trim().toLowerCase() === currentCase.correctAnswer.toLowerCase();

    if (isCorrect) {
      setFeedback('✓ Case solved!');
      const pointsEarned = Math.max(levelScore, 10);
      setScore(prev => prev + pointsEarned);
      setLevelCompleted(true);
    } else {
      setFeedback('✗ Incorrect. Try again!');
    }
  };

  const handleUseHint = () => {
    if (hints.length < currentCase.hints.length) {
      setHints([...hints, currentCase.hints[hints.length]]);
    }
  };

  const handleNextLevel = () => {
    if (currentLevel < mysteryCases.length - 1) {
      const newLevel = currentLevel + 1;
      setCurrentLevel(newLevel);
      setUserAnswer('');
      setFeedback('');
      setLevelCompleted(false);
      setHints([]);

      const updatedProgress = {
        currentLevel: newLevel,
        totalScore: score,
        hints: []
      };
      setGameProgress(updatedProgress);
    } else {
      setShowFinalResults(true);
    }
  };

  const handleFinishGame = () => {
    navigate('/leaderboard');
  };

  if (showFinalResults) {
    return (
      <div 
        className="game-interface"
        style={{
          backgroundImage: "url('/public/images/game-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="final-results">
          <h1>🏆 INVESTIGATION COMPLETE</h1>
          
          <div className="results-card">
            <div className="team-name">{teamData?.teamName}</div>
            
            <div className="final-score">{score}</div>
            <div className="score-label">TOTAL POINTS</div>

            <div className="case-summary">
              <h3>CASE SUMMARY</h3>
              <div className="case-list">
                {mysteryCases.map((caseItem, idx) => (
                  <div key={caseItem.id} className={`case-item ${idx <= currentLevel ? 'completed' : ''}`}>
                    <span className="case-status">{idx < currentLevel ? '✓' : idx === currentLevel ? '✓' : '○'}</span>
                    <span className="case-name">{caseItem.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn-leaderboard" onClick={handleFinishGame}>
              VIEW LEADERBOARD
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="game-interface"
      style={{
        backgroundImage: "url('/public/images/game-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="game-header">
        <div className="header-left">
          <h1>INVESTIGATION</h1>
          <div className="team-info">{teamData?.teamName}</div>
        </div>

        <div className="header-right">
          <div className="score-tracker">
            <div className="score-value">{score}</div>
            <div className="score-label">PTS</div>
          </div>
          <div className="level-indicator">
            Case {currentLevel + 1} 
          </div>
        </div>
      </div>

      <div className="game-content">
        <div className="case-visual">
          <h2>{currentCase.title}</h2>
          {currentCase.image && (
            <img src={currentCase.image} alt={currentCase.title} className="case-image" />
          )}
          <p>{currentCase.description}</p>
        </div>

        <div className="game-section">
          {!levelCompleted ? (
            <div className="answer-section">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => {
                  setUserAnswer(e.target.value);
                  setFeedback('');
                }}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmitAnswer()}
                placeholder="Enter your answer..."
                className="answer-input"
              />

              {feedback && (
                <div className={`feedback ${feedback.includes('Case') ? 'correct' : 'incorrect'}`}>
                  {feedback}
                </div>
              )}

              <div className="action-buttons">
                <button className="btn-submit" onClick={handleSubmitAnswer}>
                  SUBMIT
                </button>
              </div>
            </div>
          ) : (
            <div className="level-complete">
              <div className="complete-icon">✓</div>
              <p>Points Earned: <span>{Math.max(levelScore, 10)}</span></p>
              <button className="btn-next" onClick={handleNextLevel}>
                {currentLevel === mysteryCases.length - 1 ? 'FINISH' : 'NEXT CASE'}
              </button>
            </div>
          )}
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentLevel + 1) / mysteryCases.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
