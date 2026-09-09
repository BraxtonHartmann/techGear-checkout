// 2. High Score List & Item Display (LeaderboardList.jsx & ScoreCard.jsx):
// Create a ScoreCard.jsx component to format individual entry cards and a 
// LeaderboardList.jsx component to display the collection.
// Use .map() to render each score item dynamically, ensuring every rendered 
// element receives a unique key prop (i.e., score.id).

function ScoreCard(props) {
    return (
        <div className="card">
            <h3>{props.initials}</h3>
            <p>Title:{props.gameTitle}</p>
            <p>High Score:{props.highScore}</p>
            <p>Category: {props.category}</p>
        </div>
    )
}

export default ScoreCard;