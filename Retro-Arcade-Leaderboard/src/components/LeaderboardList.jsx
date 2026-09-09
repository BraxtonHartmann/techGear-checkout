// 2. High Score List & Item Display (LeaderboardList.jsx & ScoreCard.jsx):
// Create a ScoreCard.jsx component to format individual entry cards and a 
// LeaderboardList.jsx component to display the collection.
// Use .map() to render each score item dynamically, ensuring every rendered 
// element receives a unique key prop (i.e., score.id).

import ScoreCard from "./ScoreCard";
// playerInitials: "PAC",
// gameTitle: "Pac-Man",
// score: 3333360,
// category: "Arcade Classic"
function LeaderboardList(props) {
    return (
        <div className="card">
            <h2>Leaderboard</h2>
            {props.scores.map((score) => (
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