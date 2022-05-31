function TodoListElement({listElement, index, changeStatus, deleteElement }){
  
  const styles = {
    li: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: '.5rem',
      border: '1px solid #eee',
      borderRadius: '5px'
    },
    input:{
      marginRight: '1rem',
    },
    strong:{
      marginRight: '.5rem'
    }
  }

  const getInput = () => {
    if (listElement.completed){
      return <input type="checkbox" style={styles.input} onChange={()=>{changeStatus(listElement.id)}} checked/>
    }
    return <input type="checkbox" style={styles.input} onChange={()=>{changeStatus(listElement.id)}}/>
  }

  return (
    <li style={styles.li}>
      <span>
        {getInput()}
        <strong style={styles.strong}>{index + 1}</strong>
        {listElement.title}
      </span>
      <button onClick={()=>{deleteElement(listElement.id)}}>delete</button>
    </li>
  )
}

export default TodoListElement