import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate("/account");
      alert("Congratulations! Your account has been created.");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="w-full h-screen bg-[url('https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg')] bg-cover">
      <div className="text-center text-white p-6">
        <h1 className="text-3xl font-bold">Create new account</h1>
        <h2>
          If you have already account
          <span className="mx-2 underline hover:text-red-700">
            <Link to="/">Sign In</Link>
          </span>
        </h2>
      </div>
      <div className="w-[60%] lg:w-[40%] mx-auto p-6 my-5 bg-slate-200 shadow-black shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="py-2">Email Address</label>
            <input
              type="email"
              className="border p-2 rounded-md border-black w-full"
              placeholder="xyz@.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label className="py-2">Password</label>
            <input
              type="password"
              className="border p-2 rounded-md border-black w-full"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="rounded-md w-full py-2 bg-blue-500 text-white mb-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
