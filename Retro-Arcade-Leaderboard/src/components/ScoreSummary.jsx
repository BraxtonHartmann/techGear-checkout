// 4. Derived Summary Stats (ScoreSummary.jsx):
// Create a ScoreSummary.jsx component that displays derived analytics (i.e., total 
// entries count, highest overall score, or average points).
// Compute values directly from props in real time during rendering. 
// Do not introduce extra useState hooks for derived numbers.

function ScoreSummary(props) {
    const total = props.games.length;

    const highest = props.games.reduce((highestScore, game) => {
        return game.score > highestScore ? game.score : highestScore;
    }, 0);

    const totalPoints = props.games.reduce((sum, game) => {
        return sum + Number(game.score);
    }, 0);

    const avg = total > 0 ? totalPoints / total : 0;

    return (
        <div>
            <p>Total: {total}</p>
            <p>Highest score: {highest}</p>
            <p>Average: {avg.toFixed(2)}</p>
        </div>
    );
}

export default ScoreSummary;