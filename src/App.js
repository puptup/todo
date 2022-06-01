import { useMemo, useState } from "react";
import AddTodo from "./Todo/AddTodo";
import TodoList from "./Todo/TodoList";
import list from "./constants/list";

function App() {

  const [todoList, setTodoList] = useState(list)

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

  const [completedList, incompletedList] = useMemo(()=>{
    const completedList = todoList.filter((todoElement) => todoElement.completed)
    const incompletedList = todoList.filter((todoElement) => !todoElement.completed)

    return [completedList, incompletedList]
  }, [todoList])

  return (
    <div className="wrapper">

      <h1>Add new todo:</h1>

      <AddTodo addTodo = {addTodoElement}/>

      <h3>Incoming list:</h3>
      {incompletedList.length > 0 
      ? <TodoList 
        todoList={incompletedList} 
        changeStatus={changeCompletedStatus} 
        deleteElement= {deleteElement}
      /> : <h4 style={{color: '#b2b2b2'}}>All done!</h4>}

      <h3>Completed list:</h3>
      {completedList.length > 0
      ? <TodoList 
        todoList={completedList} 
        changeStatus={changeCompletedStatus} 
        deleteElement= {deleteElement}
        /> 
      : <h4 style={{color: '#b2b2b2'}}>Do! Don't be lazy!</h4>}

    </div>
  );
}

export default App;
