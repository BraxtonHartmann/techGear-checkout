import { useState } from 'react'
import './App.css'
import NewScoreForm from './components/NewScoreForm';
import LeaderboardList from './components/LeaderboardList';


// Step-by-Step Technical Instructions

// 3. Filter Controls (CategoryFilter.jsx):
// Create a CategoryFilter.jsx component containing a dropdown/select control for filtering 
// entries by category (or "All Categories").
// Lift the selected filter state up to App.jsx so filtering affects both the rendered 
// list and summary statistics.

// 4. Derived Summary Stats (ScoreSummary.jsx):
// Create a ScoreSummary.jsx component that displays derived analytics (i.e., total 
// entries count, highest overall score, or average points).
// Compute values directly from props in real time during rendering. 
// Do not introduce extra useState hooks for derived numbers.

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

  const addScoreHandler = (newInput) =>{
    setScores((prevScores) => [newInput, ...prevScores])
  } 

  return (
    <div>
      <NewScoreForm onAddScore = {addScoreHandler}/>
      <LeaderboardList scores = {scores}/>
    </div>
  )
}

export default App
