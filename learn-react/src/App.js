import React, {useState} from 'react'
import './App.css'
import {FaCheck} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'


function Todo(props) {

  // const colors = ['#f44336', '#e91e63',  '#3f51b5', '#00897b', '#ff5722'];


  return(
    <div className='todo-item' style={{backgroundColor: props.todo.isCompleted ? "rgba(255, 255, 255, 0.5)" : "#e91e63",}}>
      <p className='todo' style={{ textDecoration: props.todo.isCompleted ? "line-through" : "", color: props.todo.isCompleted ? "rgba(255,255,255, 0.7)" : "" }}>
        {props.todo.text}
      </p>
      <div>
        <FaCheck className='reactIcons' onClick={()=> props.completeTodo(props.index)}/>
        <AiFillCloseCircle className='closeBtn' onClick={()=>props.removeTodo(props.index)}/>
      </div>
    </div>
  )
}

function TodoForm(props){
  const [input, setInput] = useState('');

  const handleChange = e =>{
    setInput(e.target.value);
  };

  const handleSubmit = e =>{
    e.preventDefault();

    if(!input){
      return;
    }

    props.addTodo(input);

    setInput('');

  };

  

  return(
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={input}
      placeholder='Add a todo'
      onChange={handleChange}
      className='todo-input'/>
      <button className='todo-button' type='submit' >Add</button>
    </form>
  )
}


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = text =>{
    const newTodo = [{text}, ...todos];
    setTodos(newTodo);
  }

  const completeTodo = index =>{
    const newTodo = [...todos];
    newTodo[index].isCompleted = true;
    setTodos(newTodo);
  }

  const removeTodo = index =>{
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }

  return (
    <div>
      <h1>What do you want to do today?</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index)=>(
        <Todo
        key={index}
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        />
      ))}
    </div>
  )
}

export default App
