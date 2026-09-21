import { useState } from 'react';
import Button from './Button';
import './TodoInput.css';

const TodoInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const todoInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTodo(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? '' : 'invalid'}`}>
        <label /*style={{color: isValid ? 'black':'red'}}*/>Checklist Task</label>
        <input
          // style = {{
          //   borderColor: isValid ? '#ccc' : 'red',
          //   backgroundColor: isValid ? 'transparent':'salmon'
          // }}
          type="text"
          value={enteredValue}
          onChange={todoInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TodoInput;