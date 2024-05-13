import { useState } from "react";
import Navbar from "./compound/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = (e, id) => {
    let t = todos.filter(item=>{
      return item.id === id
    })
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id !== id
    })
    setTodos(newTodos)
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id !== id
    })
    setTodos(newTodos)
  };
  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, iscomplete: false}]);
    setTodo("");
    console.log(todos)
  };
  const handlechange = (e) => {
    setTodo(e.target.value);
  };
  const handlechecked = (e) =>{
    let id = e.target.name
    let index = todos.findIndex(item=>{
      return item.id === id
    })
    let newtodos = [...todos]
    console.log(newtodos)
    newtodos[index].iscomplete = !newtodos[index].iscomplete
    setTodos(newtodos)
  }

  return (
    <>
      <Navbar />
      <div className="container bg-violet-100 mx-auto my-3 rounded-xl min-h-[80vh] p-5">
        <div className="addtodos my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            onChange={handlechange}
            value={todo}
            type="text"
            className="w-1/2"
          />
          <button onClick={handleAdd}
            className="bg-violet-700 hover:bg-violet-900 text-white py-1.5 px-1.5 text-sm font-bold rounded-md mx-6">Save</button>
        </div>
        <h2>Yours Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-3">There is no Todo</div>}
          {todos.map((item) => {
            return <div key={item.id} className="todo flex my-3 justify-between w-1/2">
              <div className="flex gap-5 items-center">
              <input type="checkbox"  onChange={handlechecked} checked={item.iscomplete} name={item.id}/>
              <div className={item.iscomplete?"line-through":""}>{item.todo}</div>
              </div>
              <div className="buttons">
                <button onClick={(e)=>{handleEdit(e, item.id)}} className="bg-violet-700 hover:bg-violet-900 text-white py-1.5 px-1.5 text-sm font-bold rounded-md mx-2">Edit</button>
                <button onClick={(e)=>{handleDelete(e, item.id)}} className="bg-violet-700 hover:bg-violet-900 text-white py-1.5 px-1.5 text-sm font-bold rounded-md mx-2">Delete</button>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
