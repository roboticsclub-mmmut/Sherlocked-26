import { useEffect, useState } from 'react';
import { leaderboardData } from '../data/cases';
import goldMedal from '../assets/gold-medal.png';
import silverMedal from '../assets/silver-medal.png';
import bronzeMedal from '../assets/bronze-medal.png';
import leaderboardBg from '../assets/bg4.jpg';
import './Leaderboard.css';

export default function Leaderboard({ teamData, gameProgress }) {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Combine leaderboard data with current team if available
      let allTeams = [...leaderboardData];
      
      if (teamData && gameProgress) {
        const currentTeamEntry = {
          id: 'current',
          teamName: teamData.teamName,
          score: gameProgress.totalScore || 0,
          casesCompleted: gameProgress.currentLevel + 1,
          isCurrent: true
        };

        // Remove existing entry if team name matches, then add current
        allTeams = allTeams.filter(t => t.teamName !== teamData.teamName);
        allTeams.push(currentTeamEntry);
      }

      // Sort by score descending
      allTeams.sort((a, b) => b.score - a.score);
      
      setRankings(allTeams);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [teamData, gameProgress]);

  const getMedalEmoji = (rank) => {
    if (rank === 0) return '🥇';
    if (rank === 1) return '🥈';
    if (rank === 2) return '🥉';
    return '';
  };

  return (
    <div className="leaderboard-page" style={{ backgroundImage: `url(${leaderboardBg})` }}>
      <div className="leaderboard-container">
        <div className="leaderboard-header">
          <h1>THE GRAND GAZETTE</h1>
          <p className="subtitle">DETECTIVE RANKINGS</p>
          <div className="header-divider"></div>
        </div>

        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Compiling Investigation Records...</p>
          </div>
        ) : (
          <>
            {/* Victory Podium */}
            {rankings.length > 0 && (
              <div className="victory-podium">
                <h2 className="podium-title">🏆 HALL OF FAME</h2>
                <div className="podium-container">
                  {/* 2nd Place */}
                  {rankings[1] && (
                    <div className="podium-position second-place">
                      <img src={silverMedal} alt="Silver Medal" className="podium-medal" />
                      <div className="podium-rank">2ND</div>
                      <div className="podium-height"></div>
                      <div className="podium-team-name">{rankings[1].teamName}</div>
                      <div className="podium-score">{rankings[1].score}</div>
                    </div>
                  )}

                  {/* 1st Place */}
                  {rankings[0] && (
                    <div className="podium-position first-place">
                      <img src={goldMedal} alt="Gold Medal" className="podium-medal" />
                      <div className="podium-rank">1ST</div>
                      <div className="podium-height"></div>
                      <div className="podium-team-name">{rankings[0].teamName}</div>
                      <div className="podium-score">{rankings[0].score}</div>
                    </div>
                  )}

                  {/* 3rd Place */}
                  {rankings[2] && (
                    <div className="podium-position third-place">
                      <img src={bronzeMedal} alt="Bronze Medal" className="podium-medal" />
                      <div className="podium-rank">3RD</div>
                      <div className="podium-height"></div>
                      <div className="podium-team-name">{rankings[2].teamName}</div>
                      <div className="podium-score">{rankings[2].score}</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            

            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th className="rank-col">RANK</th>
                  <th className="team-col">DETECTIVE TEAM</th>
                  <th className="cases-col">CASES</th>
                  <th className="score-col">SCORE</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((team, index) => (
                  <tr key={team.id} className={`row-${index} ${team.isCurrent ? 'current-team' : ''}`}>
                    <td className="rank-col">
                      <div className="rank-display">
                        {getMedalEmoji(index) && (
                          <span className="medal">{getMedalEmoji(index)}</span>
                        )}
                        <span className="rank-number">#{index + 1}</span>
                      </div>
                    </td>
                    <td className="team-col">{team.teamName}</td>
                    <td className="cases-col">{team.casesCompleted}</td>
                    <td className="score-col">{team.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
<div className="stats-overview">
              <div className="stat-card">
                <div className="stat-number">{rankings.length}</div>
                <div className="stat-label">CASES</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5</div>
                <div className="stat-label">MYSTERIES</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2500</div>
                <div className="stat-label">MAX POINTS</div>
              </div>
            </div>
            <div className="investigation-legend">
              <h3>📜 INVESTIGATION NOTES</h3>
              <div className="legend-items">
                <div className="legend-item">
                  <span className="legend-icon">•</span>
                  <span className="legend-text">Solve all 5 mysterious cases to maximize your score</span>
                </div>
                <div className="legend-item">
                  <span className="legend-icon">•</span>
                  <span className="legend-text">Using hints deducts 20 points per case</span>
                </div>
                <div className="legend-item">
                  <span className="legend-icon">•</span>
                  <span className="legend-text">Difficulty increases with each case you solve</span>
                </div>
                <div className="legend-item">
                  <span className="legend-icon">•</span>
                  <span className="legend-text">Rankings refresh with each new investigation</span>
                </div>
              </div>
            </div>

            <div className="leaderboard-footer">
              <p>Last Updated: {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
