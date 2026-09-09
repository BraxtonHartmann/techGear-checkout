// 1. Controlled Input Form (NewScoreForm.jsx):
// Create a NewScoreForm.jsx component inside src/components/. It must include input fields for 
// player initials, game title, high score, and category dropdown.
// Manage each input field using React state (useState) as controlled components.
// Handle form submission via an onSubmit event handler that calls e.preventDefault() 
// to stop browser reloads.
// Pass the new score object upward to parent state via a function prop callback 
// (i.e., onAddScore) and reset the form inputs after submission.
import { useState } from "react";


function NewScoreForm(props) {
    const [enteredInitials, setEnteredInitials] = useState('');
    const [enteredGameTitle, setEnteredGameTitle] = useState('');
    const [enteredHighScore, setEnteredHighScore] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('Arcade Classic');

    const submitHandler = (event) => {
        event.preventDefault();

        const scoreData = {
            id: Math.random().toString(),
            playerInitials: enteredInitials,
            gameTitle: enteredGameTitle,
            score: enteredHighScore,
            category: enteredCategory
        }

        props.onAddScore(scoreData)

        setEnteredInitials('');
        setEnteredGameTitle('');
        setEnteredHighScore('');
        setEnteredCategory('Arcade Classic');
    }
    

    return (
        <form className="card" onSubmit={submitHandler}>
            <div className="form-control">
                <label>Player Initials</label>
                <input
                    type="text"
                    value={enteredInitials}
                    onChange={(e) => setEnteredInitials(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Game Title</label>
                <input
                    type="text"
                    value={enteredGameTitle}
                    onChange={(e) => setEnteredGameTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>High Score</label>
                <input
                    type="number"
                    min="1"
                    step="1"
                    value={enteredHighScore}
                    onChange={(e) => setEnteredHighScore(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Type</label>
                <select
                    value={enteredCategory}
                    onChange={(e) => setEnteredCategory(e.target.value)}>
                    <option value="Arcade Classic">Arcade Classic</option>
                    <option value="Sci-Fi Shooter">Sci-Fi Shooter</option>
                    <option value="maze">Maze</option>
                    <option value="racing">Racing</option>
                </select>
            </div>
            <button type="submit">Add New Score</button>
        </form>
    )
}

export default NewScoreForm;