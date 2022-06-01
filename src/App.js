import { useState } from "react";
import AddTodo from "./Todo/AddTodo";
import TodoList from "./Todo/TodoList";

function App() {

  const [todoList, setTodoList] = useState([
    {id:1, completed: false, title: 'Выучить вебпак'},
    {id:2, completed: true, title: 'Выучить реакт'},
    {id:3, completed: true, title: 'Покормить собаку'},
    {id:4, completed: false, title: 'Выучить ts'},
    {id:5, completed: true, title: 'Выучить js'},
    {id:6, completed: false, title: 'Уволиться с завода'},
  ])

  const addTodoElement = (title) => {
    if (title){
      const newId = Math.max(...todoList.map(todoElement => todoElement.id)) + 1
      todoList.push({id: newId, completed: false, title})
      const newTodoList = [...todoList]
      setTodoList(newTodoList)
    }
  }

  const deleteElement = (id) => {
    setTodoList(todoList.reduce((acc,todoElement) =>{
      if (todoElement.id !== id) {
        acc.push(todoElement)
      }
      return acc
    }, []))
  }

  const changeCompletedStatus = (id) => {
    const todoElementIndex = todoList.findIndex((todoElement) => todoElement.id === id)
    const todoElement = todoList.find((todoElement) => todoElement.id === id)
    todoElement.completed = !todoElement.completed

    const newList = todoList.slice(0, todoElementIndex).concat(todoList.slice(todoElementIndex+1))
    newList.push(todoElement)
    setTodoList(newList)
  }

  return (
    <div className="wrapper">

      <h1>Add new todo:</h1>

      <AddTodo addTodo = {addTodoElement}/>

      <h3>Incoming list:</h3>
      {todoList.filter((todoElement) => !todoElement.completed).length > 0 
      ? <TodoList 
        todoList={todoList.reduce((acc, todoElement)=>{
          if (!todoElement.completed){
            acc.push(todoElement)
          }
          return acc
        }, [])} 
        changeStatus={changeCompletedStatus} 
        deleteElement= {deleteElement}
      /> : <h4 style={{color: '#b2b2b2'}}>All done!</h4>}

      <h3>Completed list:</h3>
      {todoList.filter((todoElement) => todoElement.completed).length > 0
      ? <TodoList 
        todoList={todoList.reduce((acc, todoElement)=>{
          if (todoElement.completed){
            acc.push(todoElement)
          }
          return acc
        }, [])} 
        changeStatus={changeCompletedStatus} 
        deleteElement= {deleteElement}
        /> 
      : <h4 style={{color: '#b2b2b2'}}>Do! Don't be lazy!</h4>}

    </div>
  );
}

export default App;
