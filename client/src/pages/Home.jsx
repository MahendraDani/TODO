import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CreateTodos from "./CreateTodos";
const Home = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? setUser(true) : setUser(false);
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      {user ? (
        <div className="mt-20">
          <CreateTodos />
        </div>
      ) : null}
    </>
  );
};

export default Home;
