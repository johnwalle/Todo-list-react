import { useState,useRef,useEffect } from 'react';
import './Todo.css';


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef= useRef(null);

useEffect(()=>{
    inputRef.current.focus();
    
},[]);


  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
    inputRef.current.focus();
};

  const changeHandler = (e)=>{
    setInputValue(e.target.value)
  }


  const removeTodo = (index) => {
    const updatedTodos = todos.filter((shek, i) => i !== index);
    setTodos(updatedTodos);
    inputRef.current.focus();

  };

  return (
    <>
    <h1 className='todo-list-title'>Todo-list</h1>

    <div className="todo-container">
      <div className='add-todo-container'>
      <input
        type="text"
        className="todo-input"
        value={inputValue}
        ref={inputRef}
        onChange={changeHandler}
      />
      <button className="add-todo-btn" onClick={addTodo}>
        Add Todo
      </button>
      </div>
      <ol className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>
            {todo}


        <button className="remove-todo-btn" onClick={() => removeTodo(index)} >
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <line x1="15" y1="9" x2="9" y2="15" />
  <line x1="9" y1="9" x2="15" y2="15" />
</svg>

  </button>
          </li>
        ))}
      </ol>
    </div>
    </>
  );
}

export default TodoList;