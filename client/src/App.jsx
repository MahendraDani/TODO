import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import GetTodo from "./pages/Get.todo";
import CreateTodo from "./pages/Create.todo";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/getTodos" element={<GetTodo />} />
            <Route path="/createTodos" element={<CreateTodo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
