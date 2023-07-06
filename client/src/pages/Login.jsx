import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      const token = response.data.accessToken;
      console.log(token);
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <div className="m-4">
          <label htmlFor="email">Eamil</label>
          <input
            type="text"
            name="email"
            className="border-2 border-black px-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="m-4">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            className="border-2 border-black px-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-3 py-1 rounded-full bg-sky-400 hover:bg-sky-600"
            onClick={handleForm}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
