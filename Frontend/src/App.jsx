import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import UpdateTodo from "./screens/UpdateTodo";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/update/:id" element={<UpdateTodo />} />
      </Routes>
    </div>
  );
};

export default App;
