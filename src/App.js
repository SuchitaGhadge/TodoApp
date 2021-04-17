
import './App.css';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { db } from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./Todo"

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
    
  }, [])  //blank to load it only for first time

  function getTodos(){
    db.collection("todos").onSnapshot(function(querySnapshot){
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inProgress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault()
    // db.collenction
    db.collection("todos").add({
      inProgress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    })

    setTodoInput("");
  }

  return (
    <div className="App" 
    style={{display: "flex", 
    flexDirection: "column", 
    justifyContent:"center", 
    alignItems:"center",
    width:"100%",
    
    }}>
    <div>
      <form>
      <h1 style={{textAlign:"center"}}>Todo App</h1>
      <TextField id="standard-basic"
       label="Add a todo here"
       style={{width:"90vw", maxWidth:"500px"}}
       value={todoInput}
       onChange={(e) => {
         setTodoInput(e.target.value)
       }}
        />
       <Button type="submit" onClick={addTodo} variant="contained" style={{ display:"none" }}>Default</Button>
       
      </form>
      <div style={{width:"90vw", maxWidth:"500px", marginTop:"24px"}}>
        {todos.map((todo) => (
          <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
      ))}
      </div>
      
    </div>
    </div>
  );
}

export default App;
