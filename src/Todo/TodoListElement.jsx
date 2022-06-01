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


  return (
    <li style={styles.li}>
      <span>
      <input type="checkbox" style={styles.input} onChange={()=>{changeStatus(listElement.id)}} checked={listElement.completed}/>
        <strong style={styles.strong}>{index + 1}</strong>
        {listElement.title}
      </span>
      <button onClick={()=>{deleteElement(listElement.id)}}>delete</button>
    </li>
  )
}

export default TodoListElement