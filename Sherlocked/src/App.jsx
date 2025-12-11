import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import TeamRegistration from './pages/TeamRegistration';
import RulesPage from './pages/RulesPage';
import GameInterface from './pages/GameInterface';
import Leaderboard from './pages/Leaderboard';
import CreatorsPage from './pages/CreatorsPage';
import './App.css';

function App() {
  const [teamData, setTeamData] = useState(null);
  const [gameProgress, setGameProgress] = useState(null);

  useEffect(() => {
    const savedTeam = localStorage.getItem('sherlockedTeam');
    const savedProgress = localStorage.getItem('sherlockedProgress');
    
    if (savedTeam) setTeamData(JSON.parse(savedTeam));
    if (savedProgress) setGameProgress(JSON.parse(savedProgress));
  }, []);

  useEffect(() => {
    if (teamData) {
      localStorage.setItem('sherlockedTeam', JSON.stringify(teamData));
    }
  }, [teamData]);

  useEffect(() => {
    if (gameProgress) {
      localStorage.setItem('sherlockedProgress', JSON.stringify(gameProgress));
    }
  }, [gameProgress]);

  return (
    <Router>
      <div className="app">
        <Navigation teamData={teamData} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/register" 
              element={<TeamRegistration setTeamData={setTeamData} />} 
            />
            <Route path="/rules" element={<RulesPage />} />
            <Route 
              path="/game" 
              element={
                <GameInterface 
                  teamData={teamData} 
                  gameProgress={gameProgress}
                  setGameProgress={setGameProgress}
                />
              } 
            />
            <Route 
              path="/leaderboard" 
              element={<Leaderboard teamData={teamData} gameProgress={gameProgress} />} 
            />
            <Route path="/creators" element={<CreatorsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
