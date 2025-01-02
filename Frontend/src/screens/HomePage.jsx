import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
// import axios from "axios";
import { useGetTodosQuery } from "../slices/todoApiSlice";

const HomePage = () => {
  // const [todos, setTodos] = useState([]);

  const {data:todos }= useGetTodosQuery()
  console.log(todos)

  // const getTodos = async ()=>{
    // const data =await axios.get("/api/todo")
    // setTodos(data.data);
  // }
  
  // useEffect(()=>{
  //   getTodos();
  // },[])
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold">Todo Manager</h1>
        <header className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center p-6">
          <p className="text-sm mt-2">Organize your tasks efficiently</p>
        </header>
        <main className="p-6 space-y-6">
          <AddTodo />
          {todos&&<TodoList todos={todos} />}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
