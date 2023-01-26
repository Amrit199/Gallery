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
    <div className=" py-4">
      <h1 className="text-3xl font-bold">Create new account</h1>
      <h2>
        If you have already account
        <span className="mx-2 underline hover:text-red-700">
          <button
            className="text-red-600 transition-colors hover:text-red-900"
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
        </span>
      </h2>
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
  );
};

export default SignUp;
