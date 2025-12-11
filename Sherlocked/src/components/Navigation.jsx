import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';
import './Navigation.css';


export default function Navigation({ teamData }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNewGame = () => {
    navigate('/register');
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Sherlocked Logo" className="logo-img" />
          <span className="logo-text">SHERLOCKED</span>
        </Link>
        
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/leaderboard" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Leaderboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/creators" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Creators
            </Link>
          </li>
          
          {teamData && (
            <li className="nav-item">
              <button className="nav-link btn-new" onClick={handleNewGame}>
                New Investigation
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
