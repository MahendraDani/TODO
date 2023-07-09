import React, { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async () => {
    const response = await axios.post("http://localhost:3000/users/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    const userId = response.data.id;
    localStorage.setItem("userId", userId);
    console.log(userId);
  };

  return (
    <div>
      <div>
        <div className="m-4">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            className="border-2 border-black px-2"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="m-4">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="border-2 border-black px-2"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
