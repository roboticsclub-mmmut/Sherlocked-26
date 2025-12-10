# 🔍 Sherlocked - Victorian Mystery Puzzle Game

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18%2B-61dafb)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview

**Sherlocked** is an elegant Victorian-themed mystery puzzle game built with React and Vite. Teams of 4 investigators solve 5 progressive cases, earn points, and compete on a leaderboard. Featuring immersive gameplay, deductive puzzles, and a sophisticated dark design aesthetic.

### 🎮 Key Features
- **5 Progressive Cases** - Easy to Hard difficulty levels
- **Team-Based Gameplay** - Register teams of 4 investigators
- **Intelligent Scoring** - Points earned with hint penalties
- **Interactive Leaderboard** - Real-time rankings with medals
- **Persistent Data** - localStorage keeps progress between sessions
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Victorian Aesthetic** - Elegant UI with gold accents and serif fonts

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm 8+

### Installation
```bash
# Navigate to project
cd Sherlocked

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5174/`

## Usage

### For Players

1. **Land on Home** - See the 5 mystery cases with elegant design
2. **Register Team** - Enter team name and 4 investigator names
3. **Solve Cases** - Read clues, solve puzzles, use hints strategically
4. **Earn Points** - Get points for each correct answer (minus hint penalties)
5. **View Leaderboard** - See your team's ranking against others
6. **Learn More** - Check out the creators page for game philosophy

### Game Rules
- **Team Size**: Exactly 4 investigators required
- **Cases**: 5 total cases with increasing difficulty
- **Scoring**: Base score minus 20 points per hint used
- **Hints**: 3 available per case
- **Maximum Score**: 1550 points (all cases without hints)

## Project Structure

```
Sherlocked/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── TeamRegistration.jsx
│   │   ├── GameInterface.jsx
│   │   ├── Leaderboard.jsx
│   │   └── CreatorsPage.jsx
│   ├── data/
│   │   └── cases.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── BUILD_SUMMARY.md
├── QUICK_START.md
├── DOCUMENTATION.md
└── README.md
```

## Technology Stack

- **React 18+** - UI framework
- **React Router v6** - Routing
- **Vite** - Build tool
- **CSS3** - Styling
- **localStorage** - Data persistence

## Game Scoring

| Case | Title | Base Points | Difficulty |
|------|-------|-------------|-----------|
| 1 | The Vanished Artifact | 100 | Easy |
| 2 | The Mansion Mystery | 250 | Medium |
| 3 | The London Smuggler | 300 | Medium |
| 4 | The Victorian Secrets | 400 | Hard |
| 5 | The Final Reckoning | 500 | Hard |

**Formula**: `Score = Base Points - (Hints Used × 20)`

## Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Browser Support

✅ Chrome, Firefox, Safari, Edge (Latest versions)
✅ Mobile browsers with responsive design

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**localStorage not working?**
- Check browser settings
- Try incognito/private mode
- Clear browser cache

## Documentation

- 📖 [Full Documentation](./DOCUMENTATION.md)
- 🚀 [Quick Start Guide](./QUICK_START.md)
- 📊 [Build Summary](./BUILD_SUMMARY.md)

## Author

Developed by the Sherlocked Team:
- Inspector James Blake - Creative Director
- Dr. Eleanor Whitmore - Game Designer
- Mr. Edward Sterling - Lead Developer
- Lady Catherine Holmes - Story Director

## License

MIT License - feel free to use this project for your own purposes

---

**Enjoy solving mysteries! 🔍✨**
