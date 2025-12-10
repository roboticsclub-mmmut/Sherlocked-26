import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fingerprintBg from '../assets/fingerprint-bg.jpg';
import './TeamRegistration.css';

export default function TeamRegistration({ setTeamData }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teamName: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team name is required';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (formData.password && formData.password.length < 4) {
      newErrors.password = 'Password must be at least 4 characters';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const teamData = {
      teamName: formData.teamName,
      password: formData.password,
      createdAt: new Date().toISOString(),
      totalScore: 0,
      casesCompleted: 0
    };

    setTeamData(teamData);
    setSubmitted(true);

    setTimeout(() => {
      navigate('/rules');
    }, 1500);
  };

  return (
    <div className="team-registration" style={{ backgroundImage: `url(${fingerprintBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="registration-container">
        <div className="registration-header">
          <h1>THE INVESTIGATION BEGINS</h1>
          <p>Login to Your Investigation Team</p>
        </div>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Team Authenticated!</h2>
            <p>{formData.teamName}</p>
          </div>
        ) : (
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="teamName">TEAM NAME</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleInputChange}
                placeholder="Enter your team name"
                className={errors.teamName ? 'error' : ''}
              />
              {errors.teamName && <span className="error-message">{errors.teamName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit">
                LOGIN TO INVESTIGATION
              </button>
              <button 
                type="button" 
                className="btn-cancel"
                onClick={() => navigate('/')}
              >
                RETURN HOME
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
