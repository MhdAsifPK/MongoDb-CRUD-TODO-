import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import UpdateTodo from "./screens/UpdateTodo";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/update/:id" element={<UpdateTodo/> }/> 
      </Routes>
    </div>
  );
};

export default App;
