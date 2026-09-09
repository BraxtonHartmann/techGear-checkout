// 2. High Score List & Item Display (LeaderboardList.jsx & ScoreCard.jsx):
// Create a ScoreCard.jsx component to format individual entry cards and a 
// LeaderboardList.jsx component to display the collection.
// Use .map() to render each score item dynamically, ensuring every rendered 
// element receives a unique key prop (i.e., score.id).

import CategoryFilter from "./CategoryFilter";
import ScoreCard from "./ScoreCard";
import { useState } from "react";

function LeaderboardList(props) {
    const [filterType, setFilterType] = useState('all');

    const filterChangeHandler = (selectedType) => {
        setFilterType(selectedType);
    }

    const filteredGames = props.scores.filter((score) => {
        if (filterType === 'all') {
            return true;
        }
    
        return score.category === filterType;
    });


    return (
        <div className="card">
            <h2>Leaderboard</h2>
            <CategoryFilter onChangeFilter={filterChangeHandler} />

            {filteredGames.map((score) => (
                <ScoreCard
                    key={score.id}
                    initials={score.playerInitials}
                    gameTitle={score.gameTitle}
                    highScore={score.score}
                    category={score.category}
                />
            ))}



        </div >
    )
}

export default LeaderboardList;