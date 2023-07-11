import React from "react";
import Navbar from "../components/Navbar";
import CreateTodos from "./CreateTodos";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mt-20">
        <CreateTodos />
      </div>
    </>
  );
};

export default Home;
