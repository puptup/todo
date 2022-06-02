import TodoListElement from "./TodoListElement"

const TodoList = ({ todoList }) => {

  const styles = {
    ul:{
      margin: 0,
      padding: 0,
      listStyle: 'none',
    }
  }

  return (
    <ul style={styles.ul}>
      {todoList.map((listElement, index) => {
        return <TodoListElement
                key={listElement.id} 
                listElement={listElement}
                index={index} 
              />
      })}
    </ul>
  )
}



export default TodoList