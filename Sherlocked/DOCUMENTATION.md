# 🔍 Sherlocked - Complete Project Documentation

## 📖 Table of Contents
1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Component Documentation](#component-documentation)
4. [Data Models](#data-models)
5. [Game Mechanics](#game-mechanics)
6. [UI/UX Design](#uiux-design)
7. [API & Storage](#api--storage)
8. [Development Guide](#development-guide)
9. [Deployment](#deployment)

---

## Project Overview

### Vision
**Sherlocked** is an immersive Victorian-themed mystery puzzle game where teams of investigators solve 5 progressive cases to earn points and compete on the leaderboard.

### Core Features
- 🎮 **5 Progressive Mystery Cases** with varying difficulty
- 👥 **Team-Based Gameplay** (4 investigators per team)
- 🧩 **Deductive Reasoning Puzzles** with hints
- 📊 **Real-Time Scoring System** with leaderboard
- 💾 **Local Data Persistence** via localStorage
- 🎨 **Victorian-Themed Design** with elegant UI
- 📱 **Fully Responsive** for all devices

### Target Audience
- Students and educators
- Puzzle enthusiasts
- Team building activities
- Mystery game lovers

---

## System Architecture

### Technology Stack

```
Frontend Layer
├── React 18+ (UI Framework)
├── React Router v6 (Routing)
├── CSS3 Grid/Flexbox (Layout)
└── Vite (Build Tool)

State Management
├── React Hooks (useState, useEffect)
└── Context API (Optional future upgrade)

Storage Layer
└── Browser localStorage (Data Persistence)

Deployment
├── Vite Build Output
└── Static Hosting (Netlify, Vercel, etc.)
```

### Architecture Diagram
```
┌─────────────────────────────────────────┐
│           User Interface                 │
│  Landing → Register → Game → Leaderboard│
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│     React Components (5 Pages)           │
│  Navigation | LandingPage | etc.        │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│     State Management (React Hooks)      │
│  teamData | gameProgress | localStorage │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│      Data Layer (cases.js)               │
│  mysteryCases | leaderboardData | etc.   │
└─────────────────────────────────────────┘
```

---

## Component Documentation

### 1. App.jsx (Root Component)

**Purpose**: Main router and state management hub

**State Management**:
```javascript
const [teamData, setTeamData] = useState(null)
const [gameProgress, setGameProgress] = useState(null)
```

**Key Features**:
- BrowserRouter setup with 5 main routes
- localStorage integration for persistence
- Props passing to child components
- useEffect hooks for data sync

**Routes**:
```javascript
/ → LandingPage
/register → TeamRegistration
/game → GameInterface
/leaderboard → Leaderboard
/creators → CreatorsPage
```

---

### 2. Navigation Component

**File**: `src/components/Navigation.jsx`

**Responsibilities**:
- Display navigation menu
- Show current team name
- Provide route links
- Handle mobile hamburger menu

**Key Props**:
```javascript
teamData: {
  teamName: string,
  members: array
}
```

**Features**:
- Responsive design (desktop/mobile)
- Sticky positioning
- Golden gradient background
- Links to all main pages

**CSS Classes**:
- `.navbar` - Main container
- `.nav-links` - Link container
- `.hamburger` - Mobile menu toggle
- `.mobile-menu` - Mobile menu content

---

### 3. LandingPage Component

**File**: `src/pages/LandingPage.jsx`

**Purpose**: Welcome page with game overview

**Key Sections**:
1. **Hero Section**: "SHE MOVES IN MYSTERIOUS WAYS" title with animation
2. **CTA Button**: "READ STORY" with hover effects
3. **Cases Grid**: Display all 5 mystery cases
4. **Navigation Arrows**: Browse cases visually

**Features**:
- Elegant centered layout
- Responsive grid (3→2→1 columns)
- Floating animations
- Call-to-action button
- Case cards with descriptions

**Styling Highlights**:
- 5.5rem hero title font
- Gold divider line
- Bouncing arrow animation
- Magnifying glass float effect

---

### 4. TeamRegistration Component

**File**: `src/pages/TeamRegistration.jsx`

**Purpose**: Collect team information before game starts

**Form Fields**:
```javascript
{
  teamName: string,
  member1: string,
  member2: string,
  member3: string,
  member4: string
}
```

**Validation**:
- All fields required
- No empty strings
- Trim whitespace
- Error messages for each field

**Key Functions**:
```javascript
validateForm() // Checks all required fields
handleSubmit() // Saves team and navigates to game
```

**State Management**:
```javascript
const [formData, setFormData] = useState({...})
const [errors, setErrors] = useState({...})
const [isSuccess, setIsSuccess] = useState(false)
```

---

### 5. GameInterface Component

**File**: `src/pages/GameInterface.jsx`

**Purpose**: Main puzzle gameplay interface

**Key Features**:
1. **Case Display**: Title, description, difficulty
2. **Evidence Box**: Clue information
3. **Puzzle Box**: Challenge question
4. **Answer Input**: Text field for user response
5. **Hint System**: 3 hints per case
6. **Progress Tracking**: Level indicator and score
7. **Results Screen**: Summary after completion

**Game Flow**:
```
Display Case 1
  ↓
User reads evidence & puzzle
  ↓
User enters answer
  ↓
Check correctness
  ├─ Correct → Award points → Next case
  └─ Incorrect → Show error → Try again
  
After Case 5 → Show final results
```

**Scoring Logic**:
```javascript
const levelScore = currentCase.baseScore - (hints.length * 20)
// Each hint used = -20 points
// Minimum score = 10 (even with max hints)
```

**State Variables**:
```javascript
currentLevel      // Current case index (0-4)
userAnswer        // User's submitted answer
feedback          // Success/failure message
hints             // Array of used hints
score             // Total points earned
levelCompleted    // Case solved flag
showFinalResults  // Results screen flag
```

---

### 6. Leaderboard Component

**File**: `src/pages/Leaderboard.jsx`

**Purpose**: Display team rankings and statistics

**Data Merging**:
- Combines `leaderboardData` with current team's progress
- Sorts all teams by score (descending)
- Highlights current team in table

**Key Sections**:
1. **Header**: "THE GRAND GAZETTE" title
2. **Stats Cards**: Teams, Mysteries, Max Points
3. **Rankings Table**: Sorted teams with medals
4. **Investigation Legend**: Game rules and info
5. **Footer**: Last updated timestamp

**Medal System**:
```javascript
1st Place → 🥇
2nd Place → 🥈
3rd Place → 🥉
4th+ → No medal
```

**Loading State**:
- 800ms simulated delay
- Spinner animation
- Loading message

---

### 7. CreatorsPage Component

**File**: `src/pages/CreatorsPage.jsx`

**Purpose**: Team credits and game information

**Key Sections**:
1. **Creator Cards**: 4 team members with roles
2. **Game Philosophy**: 4 pillars of game design
3. **Technical Specs**: 4 cards with tech stack
4. **Support Info**: Feedback and contact info
5. **Footer**: Copyright and version

**Creator Data Structure**:
```javascript
{
  id: number,
  name: string,
  avatar: emoji,
  role: string,
  bio: string,
  skills: array
}
```

---

## Data Models

### Mystery Case Object
```javascript
{
  id: number,
  title: string,
  description: string,
  difficulty: "Easy" | "Medium" | "Hard",
  baseScore: number,      // 100, 250, 300, 400, 500
  clue: string,           // Evidence/context
  puzzle: string,         // Challenge question
  correctAnswer: string,  // Exact expected answer
  hints: [               // Array of 3 hints
    string,
    string,
    string
  ]
}
```

### Team Data Object
```javascript
{
  teamName: string,
  members: [
    { name: string, role: string },
    { name: string, role: string },
    { name: string, role: string },
    { name: string, role: string }
  ]
}
```

### Game Progress Object
```javascript
{
  currentLevel: number,    // 0-4
  totalScore: number,      // Current points
  hints: []               // Hints used tracking
}
```

### Leaderboard Entry Object
```javascript
{
  id: string,
  teamName: string,
  score: number,
  casesCompleted: number,  // 0-5
  isCurrent: boolean       // Current user's team?
}
```

### Creator Object
```javascript
{
  id: number,
  name: string,
  avatar: emoji,           // Single emoji
  role: string,
  bio: string,
  skills: [string, ...]    // Array of skills
}
```

---

## Game Mechanics

### Case Progression
```
Level 0: The Vanished Artifact (100 pts, Easy)
   ↓
Level 1: The Mansion Mystery (250 pts, Medium)
   ↓
Level 2: The London Smuggler (300 pts, Medium)
   ↓
Level 3: The Victorian Secrets (400 pts, Hard)
   ↓
Level 4: The Final Reckoning (500 pts, Hard)
```

### Scoring System
```
Base Score - (Hints Used × 20) = Case Score
├─ Minimum per case: 10 points (even with 3 hints)
├─ Maximum per case: Base score (no hints)
└─ Global maximum: 1550 points (all cases, no hints)

Total Score = Sum of all case scores
```

### Hint System
```
Hints Available: 3 per case
Penalty Per Hint: 20 points
Display: "HINT (0/3)" → "HINT (1/3)" → "HINT (2/3)" → "HINT (3/3)" → Button disabled
```

### Answer Validation
```
User Input → Trim & Lowercase → Compare with Answer
├─ Match → Success: Award points, allow next case
└─ No Match → Failure: Show error, allow retry
```

### Win Condition
```
Complete all 5 cases → Show results screen with:
├─ Investigation Complete header
├─ Team name display
├─ Total points earned
├─ Case completion list
└─ Leaderboard navigation button
```

---

## UI/UX Design

### Color Palette
```css
Primary Background: #0f0f0f, #1a1a1a (gradient)
Card Background: rgba(42, 42, 42, 0.6)
Accent Color: #d4af37 (Gold)
Text Primary: #f5f5dc (Cream)
Text Secondary: #bdc3c7 (Gray)
Success Color: #4cb50f (Green)
Error Color: #ff6b6b (Red)
```

### Typography Scale
```
Hero Title: 5.5rem (landing page)
Page Titles: 3rem (all pages)
Section Headers: 1.8rem (game, leaderboard, etc.)
Subheaders: 1.2rem (cards, boxes)
Body Text: 1rem (normal)
Small Text: 0.9rem (labels, hints)
Meta Text: 0.85rem (copyright, version)

Font: Georgia, serif (throughout)
Letter Spacing: 1-3px for headers
Line Height: 1.6 for body text
```

### Animation Library
```javascript
@keyframes scaleIn     // Fade and grow
@keyframes spin        // Loading spinner
@keyframes bounce      // Button hover
@keyframes float       // Magnifying glass
@keyframes fadeIn      // Page load
```

### Responsive Breakpoints
```
Desktop:  1200px+ (full features)
Tablet:   768px-1199px (adjusted grids)
Mobile:   480px-767px (single column)
Small:    <480px (minimal layout)
```

### Layout Patterns
```
Grid Layouts:
- auto-fit with minmax for responsive grids
- 3 columns → 2 columns → 1 column

Flexbox:
- Navigation bar
- Form fields
- Button groups
- Card containers

Positioning:
- Sticky navigation
- Fixed buttons
- Relative spacing
```

---

## API & Storage

### localStorage Integration

**Keys Used**:
```javascript
// Team information
localStorage.setItem('sherlockedTeam', JSON.stringify(teamData))
localStorage.getItem('sherlockedTeam')

// Game progress
localStorage.setItem('sherlockedProgress', JSON.stringify(gameProgress))
localStorage.getItem('sherlockedProgress')
```

**Update Triggers**:
```javascript
useEffect(() => {
  if (teamData) {
    localStorage.setItem('sherlockedTeam', JSON.stringify(teamData))
  }
}, [teamData])

useEffect(() => {
  if (gameProgress) {
    localStorage.setItem('sherlockedProgress', JSON.stringify(gameProgress))
  }
}, [gameProgress])
```

**Data Persistence**:
- Browser tab close → Data persists
- Browser restart → Data persists
- Clear cache → Data clears
- Incognito/Private mode → Data doesn't persist

### Simulated Data Sources

**Leaderboard Data**:
- Imported from `cases.js`
- 5 pre-filled teams
- Dynamically merged with current team
- Sorted by score descending

**Mystery Cases**:
- All case data in `cases.js`
- No external API calls
- Static data structure
- No database backend

---

## Development Guide

### Project Setup
```bash
# Clone or navigate to project
cd Sherlocked

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### File Organization
```
src/
├── components/         # Reusable components
│   ├── Navigation.jsx
│   └── Navigation.css
├── pages/             # Page components
│   ├── LandingPage.jsx
│   ├── GameInterface.jsx
│   ├── Leaderboard.jsx
│   ├── CreatorsPage.jsx
│   └── TeamRegistration.jsx
├── data/              # Static data
│   └── cases.js
├── App.jsx            # Root component
├── App.css            # Global styles
├── index.css          # Base styles
└── main.jsx           # Entry point
```

### Code Style Guidelines
```javascript
// Components
- Use functional components with hooks
- Props destructuring
- Clear naming conventions
- Comments for complex logic

// CSS
- BEM naming convention
- Mobile-first approach
- CSS Grid/Flexbox over Float
- Rem units for sizing
- Golden color #d4af37 as accent

// State Management
- useState for component state
- useEffect for side effects
- Props drilling for small apps
- localStorage for persistence
```

### Adding New Features

**Add Mystery Case**:
1. Add to `mysteryCases` array in `cases.js`
2. Update maximum points
3. Test scoring calculation
4. Verify hint system

**Add Creator**:
1. Add to `creators` array in `cases.js`
2. Use consistent emoji avatar
3. Include 3+ skills
4. Test card layout

**Add Animation**:
1. Define @keyframes in CSS
2. Apply to component class
3. Test smooth 60fps
4. Add accessibility considerations

---

## Deployment

### Build Process
```bash
npm run build
```
**Output**: `dist/` folder with optimized build

### Deployment Options

**Netlify**:
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

**Vercel**:
1. Import project
2. Auto-detects Vite
3. One-click deployment
4. Auto-preview on PRs

**GitHub Pages**:
1. Build locally: `npm run build`
2. Deploy `dist/` folder
3. Set repository settings for gh-pages

**Traditional Hosting**:
1. Build: `npm run build`
2. Upload `dist/` contents
3. Configure server for SPA routing
4. Set 404.html → index.html

### Environment Variables
```javascript
// No environment variables currently used
// Optional future: API endpoints, analytics tracking
```

### Performance Optimization
```javascript
- Vite automatically code-splits
- CSS is minified in production
- Images optimized automatically
- JavaScript bundled and minified
```

### SEO Considerations
```html
<!-- Add to public/index.html -->
<title>Sherlocked - Victorian Mystery Puzzle Game</title>
<meta name="description" content="Solve mysteries, compete with teams, climb the leaderboard">
<meta name="theme-color" content="#d4af37">
```

---

## Troubleshooting & FAQ

### Common Issues

**Issue**: Port already in use
**Solution**: Run on different port: `npm run dev -- --port 3000`

**Issue**: Data not persisting
**Solution**: Check localStorage enabled in browser settings

**Issue**: Animations stuttering
**Solution**: Close other tabs, check CPU usage, try different browser

**Issue**: Mobile layout broken
**Solution**: Clear browser cache, check viewport meta tag

---

## Future Enhancements

### Potential Features
- [ ] Multiplayer real-time competition
- [ ] User accounts and cloud sync
- [ ] Additional mystery cases
- [ ] Difficulty settings
- [ ] Achievement badges
- [ ] Hint system with limited uses
- [ ] Timed challenges
- [ ] Social sharing
- [ ] Dark/Light mode toggle
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)

### Technical Improvements
- [ ] Migrate to Context API
- [ ] Add TypeScript
- [ ] Implement unit tests
- [ ] Add E2E testing
- [ ] Setup CI/CD pipeline
- [ ] Add PWA functionality
- [ ] Implement service workers

---

## Version History

```
v1.0.0 (Initial Release)
├─ 5 mystery cases
├─ Team registration
├─ Game interface with scoring
├─ Leaderboard with rankings
├─ Creators page
├─ localStorage persistence
├─ Responsive design
└─ Victorian-themed UI
```

---

**Last Updated**: 2024
**Author**: Sherlocked Development Team
**License**: MIT (add if applicable)
**Status**: Production Ready ✨
