export const mysteryCases = [
  {
    id: 1,
    title: "The Vanished Artifact",
    description: "A priceless jewel has disappeared from the museum.",
    image: "/images/case1.jpg",
    difficulty: "Easy",
    baseScore: 100,
    clue: "The thief left behind three items: a torn ticket, muddy footprints, and a mysterious note.",
    puzzle: "If the thief entered at 8:00 PM and left at 10:30 PM, and each artifact viewing takes 15 minutes, how many artifacts could they have viewed?",
    correctAnswer: "1"
  },
  {
    id: 2,
    title: "The Mansion Mystery",
    description: "A wealthy collector's estate holds secrets. Solve the coded message.",
    image: "/images/case2.jpg",
    difficulty: "Medium",
    baseScore: 250,
    clue: "Three suspects were present: The Butler, The Maid, and The Secretary.",
    puzzle: "The code: A=1, B=2, C=3... Z=26. What does 'CLUE' equal? (3+12+21+5)",
    correctAnswer: "2"
  },
  {
    id: 3,
    title: "The London Smuggler",
    description: "Track down contraband hidden in the city. Decode the merchant's ledger.",
    image: "/images/case3.jpg",
    difficulty: "Medium",
    baseScore: 300,
    clue: "The ledger shows suspicious patterns. On odd days, shipments increased by 2x.",
    puzzle: "If Day 1 had 5 items, Day 3 had 10, Day 5 had 20... how many items on Day 7?",
    correctAnswer: "3"
  },
  {
    id: 4,
    title: "The Crimson Conspiracy",
    description: "Uncover a secret society's communications. Break their cipher.",
    image: "/images/case4.jpg",
    difficulty: "Hard",
    baseScore: 400,
    clue: "Members use dates as codes: 1842 (birth), 1893 (meeting), 1901 (incident).",
    puzzle: "Extract the 2nd digit of each year: 1842, 1893, 1901. Form the code by combining digits.",
    correctAnswer: "4"
  },
  {
    id: 5,
    title: "The Final Case",
    description: "All clues converge. The mastermind awaits. Final deduction.",
    image: "/images/case5.jpg",
    difficulty: "Expert",
    baseScore: 500,
    clue: "The pattern connects all previous cases: 100 + 250 + 300 + 400.",
    puzzle: "Sum all base scores from Cases 1-4. What is the total?",
    correctAnswer: "5"
  }
];

export const leaderboardData = [
  { rank: 1, teamName: "The Baker Street Boys", score: 145, members: 4, completionTime: "18 mins" },
  { rank: 2, teamName: "Watson's Investigators", score: 138, members: 4, completionTime: "22 mins" },
  { rank: 3, teamName: "The Irregulars", score: 132, members: 4, completionTime: "25 mins" },
  { rank: 4, teamName: "Sherlock's Successors", score: 129, members: 4, completionTime: "28 mins" },
  { rank: 5, teamName: "The Detective Bureau", score: 124, members: 4, completionTime: "31 mins" },
];

export const creators = [
  {
    id: 1,
    name: "Inspector James Blake",
    avatar: "🔍",
    role: "Lead Detective & Creative Director",
    bio: "Orchestrated the grand investigation and brought the vision to life.",
    skills: ["Creative Direction", "Game Design", "Story Development"]
  },
  {
    id: 2,
    name: "Dr. Eleanor Whitmore",
    avatar: "🧩",
    role: "Chief Investigator & Designer",
    bio: "Crafted the puzzles with meticulous precision and clever twists.",
    skills: ["Puzzle Design", "UI/UX", "User Experience"]
  },
  {
    id: 3,
    name: "Mr. Edward Sterling",
    avatar: "⚙️",
    role: "Lead Developer",
    bio: "Built the digital investigation platform from the ground up.",
    skills: ["React", "JavaScript", "Full Stack Development"]
  },
  {
    id: 4,
    name: "Lady Catherine Holmes",
    avatar: "📖",
    role: "Story & Narrative Director",
    bio: "Wove the intricate narrative tapestry and atmospheric details.",
    skills: ["Narrative Design", "World Building", "Copywriting"]
  }
];
