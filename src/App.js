import { useMemo, useState } from "react";
import AddTodo from "./Todo/AddTodo";
import TodoList from "./Todo/TodoList";
import list from "./constants/list";

const App = () => {

  const [todoList, setTodoList] = useState(list)

  const addTodoElement = (title) => {
    if (title){
      const newId = new Date()
      setTodoList((prevList)=>{
        return [...prevList, {id: newId, completed: false, title}]
      })
    }
  }

  const deleteElement = (id) => {
    setTodoList(todoList.filter((todoElement) => todoElement.id !== id))
  }

  const changeCompletedStatus = (id) => {
    const todoElement = todoList.find((todoElement) => todoElement.id === id)
    todoElement.completed = !todoElement.completed
    const newList = todoList.filter((todoElement) => todoElement.id !== id) 
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
