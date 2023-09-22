import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Test from "./Test";

ChartJS.register(ArcElement, Tooltip);

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
