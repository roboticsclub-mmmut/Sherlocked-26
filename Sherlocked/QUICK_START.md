# 🔍 Sherlocked - Quick Start Guide

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm installed

### Installation

1. **Navigate to project directory**:
   ```bash
   cd "c:\Users\ANUSHKA SINGH\rc\Sherlocked"
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Navigate to `http://localhost:5174/`

---

## User Guide

### 🎮 Playing Sherlocked

#### Step 1: Register Your Team
1. Click **"READ STORY"** on the landing page
2. Enter your team name
3. Enter names for 4 investigators
4. Click **"FORM INVESTIGATION TEAM"**

#### Step 2: Solve Mysteries
1. Read the **EVIDENCE** section (clues)
2. Read the **PUZZLE** (challenge question)
3. Type your answer in the input field
4. Use **HINT** button if needed (costs 20 points)
5. Click **SUBMIT** to check your answer
6. Upon success, click **NEXT CASE** to proceed

#### Step 3: Review Results
- After solving all 5 cases (or finishing early):
- View your **INVESTIGATION COMPLETE** summary
- See total points earned
- Check which cases you solved
- Click **VIEW LEADERBOARD** to see rankings

#### Step 4: Check Rankings
- View all team rankings on leaderboard
- See medals for top 3 teams (🥇🥈🥉)
- Compare your score with others
- View investigation statistics

#### Step 5: Learn More
- Click **CREATORS** in navigation
- Meet the development team
- Read about game philosophy
- Check technical specifications

---

## 📊 Scoring Guide

| Case | Title | Base Points | Difficulty |
|------|-------|-------------|-----------|
| 1 | The Vanished Artifact | 100 | Easy |
| 2 | The Mansion Mystery | 250 | Medium |
| 3 | The London Smuggler | 300 | Medium |
| 4 | The Victorian Secrets | 400 | Hard |
| 5 | The Final Reckoning | 500 | Hard |

**Hint Penalty**: -20 points per hint used
**Maximum Possible Score**: 1550 points (without hints)

---

## 🎯 Tips for Success

### Solving Puzzles
- Read the **EVIDENCE** carefully—clues are important
- Break down the **PUZZLE** into smaller questions
- Think logically about the problem
- Use hints strategically (3 per case available)

### Maximizing Score
- Solve all 5 cases for maximum points
- Minimize hint usage to preserve points
- Try cases without hints first
- Save hints for the hardest cases

### Team Strategy
- Discuss evidence and puzzle as a team
- Share different perspectives
- Collaborate on the final answer
- Celebrate successful cases together

---

## 🔧 Technical Details

### Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full responsive support

### Data Storage
- All data saved to browser's localStorage
- Data persists between sessions
- No internet connection required after loading
- Clear browser data to reset progress

### Performance
- Page load time: <1 second
- Smooth 60fps animations
- Optimized for mobile devices
- Responsive design adjusts to any screen size

---

## 🐛 Troubleshooting

### Page Not Loading
- Check if dev server is running
- Verify port 5174 is accessible
- Try clearing browser cache
- Reload with Ctrl+Shift+R

### Data Not Saving
- Check browser localStorage is enabled
- Try a different browser
- Clear browser cookies and reload
- Check browser's storage quota

### Animations Slow
- Close other browser tabs
- Disable browser extensions
- Try a different browser
- Check system CPU usage

### Form Validation Issues
- Ensure all fields are filled
- Check for extra spaces in names
- Try refreshing the page
- Clear localStorage and restart

---

## 🎨 Customization

### Change Color Scheme
Edit `src/index.css` and `src/App.css`:
- `#d4af37` - Gold accent color
- `#f5f5dc` - Text color
- `#1a1a1a` - Background color

### Modify Mystery Cases
Edit `src/data/cases.js`:
- Add new cases to `mysteryCases` array
- Update `baseScore` for difficulty
- Create new hints for each case

### Adjust Scoring
Edit `GameInterface.jsx`:
- Change hint penalty (currently -20)
- Adjust scoring multipliers
- Modify points calculation

---

## 📚 File Structure Reference

```
Sherlocked/
├── src/
│   ├── pages/           (5 pages: Landing, Register, Game, Leaderboard, Creators)
│   ├── components/      (Navigation component)
│   ├── data/           (Mystery cases & team data)
│   ├── App.jsx         (Main router)
│   ├── App.css         (Global app styles)
│   └── index.css       (Global styling)
├── public/
├── package.json        (Dependencies)
├── vite.config.js      (Build configuration)
└── README.md
```

---

## 🚀 Building for Production

### Create Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy
The build output is in `dist/` folder. Deploy to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

---

## 📧 Support

- **Bug Reports**: Check console for errors (F12)
- **Feature Requests**: Modify source files and rebuild
- **Performance Issues**: Check browser dev tools
- **Data Issues**: Clear localStorage and restart

---

**Enjoy solving mysteries! 🔍✨**

Version 1.0.0 | Last Updated: 2024
