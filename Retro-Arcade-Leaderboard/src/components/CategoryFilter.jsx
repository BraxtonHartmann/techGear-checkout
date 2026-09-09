// 3. Filter Controls (CategoryFilter.jsx):
// Create a CategoryFilter.jsx component containing a dropdown/select control for filtering 
// entries by category (or "All Categories").
// Lift the selected filter state up to App.jsx so filtering affects both the rendered 
// list and summary statistics.

function CategoryFilter(props) {

    const dropdownChangeHandler = (event) => {
       props.onChangeFilter(event.target.value)
    }
    return (
        <div className="form-control">
            <label>Type</label>
            <select
                value={props.selected}
                onChange={dropdownChangeHandler}>
                <option value="all">All Categories</option>
                <option value="Arcade Classic">Arcade Classic</option>
                <option value="Sci-Fi Shooter">Sci-Fi Shooter</option>
                <option value="maze">Maze</option>
                <option value="racing">Racing</option>
            </select>
        </div>
    )
}

export default CategoryFilter;