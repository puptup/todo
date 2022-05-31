import { useState } from "react"

function AddTodo({addTodo}){

  const styles = {
    div: {
      display: 'flex'
    },
    textarea: {
      resize: 'none',
      display: 'block',
      width: '100%'
    },
    button: {
      display: 'block',
      margin: '0 auto'
    }
  }

  const addTodoAndClearTextarea = () =>{
    addTodo(textArea)
    setTextarea('')
  }

  const [textArea, setTextarea] = useState('')

  return (
    <div style={styles.div}>
      <textarea 
        value={textArea}
        onChange={(event)=>{setTextarea(event.target.value)}}
        style={styles.textarea}/>
      <button style={styles.button} onClick={() => addTodoAndClearTextarea()}>add</button>
    </div>
  )
}

export default AddTodo