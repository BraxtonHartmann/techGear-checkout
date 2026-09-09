import { useState } from 'react'
import './App.css'
import NewScoreForm from './components/NewScoreForm';
import LeaderboardList from './components/LeaderboardList';
import ScoreSummary from './components/ScoreSummary';


// Step-by-Step Technical Instructions


// 5. Central State Management & Event Flow (App.jsx):
// In App.jsx:
// Initialize state for the list of scores using useState(INITIAL_SCORES) and state 
// for the category filter.
// Implement an event handler function to add new entries using a functional state update 
// and spread syntax (i.e., setScores((prevScores) => [newEntry, ...prevScores])).
// Derive the filtered array of scores based on the current category state and pass down 
// the filtered list to LeaderboardList and ScoreSummary.

function App() {
  const INITIAL_SCORES = [
    {
      id: "s1",
      playerInitials: "PAC",
      gameTitle: "Pac-Man",
      score: 3333360,
      category: "Arcade Classic"
    },
    {
      id: "s2",
      playerInitials: "MAR",
      gameTitle: "Donkey Kong",
      score: 1260700,
      category: "Arcade Classic"
    },
    {
      id: "s3",
      playerInitials: "ACE",
      gameTitle: "Galaga",
      score: 1599100,
      category: "Sci-Fi Shooter"
    }
  ];

  const [scores, setScores] = useState(INITIAL_SCORES);
  const [filterType, setFilterType] = useState('all');

  const addScoreHandler = (newInput) => {
    setScores((prevScores) => [newInput, ...prevScores])
  }
  const filterChangeHandler = (selectedType) => {
    setFilterType(selectedType);
  }
  const filteredGames = scores.filter((score) => {
    if (filterType === 'all') {
      return true;
    }

    return score.category === filterType;
  });

  return (
    <div>
      <NewScoreForm onAddScore={addScoreHandler} />
      <ScoreSummary games={filteredGames} />
      <LeaderboardList
        scores={filteredGames}
        selected={filterType}
        onChangeFilter={filterChangeHandler}
      />
    </div>
  )
}

export default App
