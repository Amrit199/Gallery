import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (err) {
      const message = err.code.split("/");
      if (message[1] === "user-not-found") {
        setError("User not Found");
      } else if (message[1] === "wrong-password") {
        setError("Wrong password entered");
      } else {
        setError("Please try again");
      }
    }
  };
  return (
    <div className="w-full h-screen bg-[url('https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_960_720.jpg')] bg-cover">
      <div className="text-center p-6 text-white">
        <h1 className="text-3xl font-bold">Welcome to the Image Gallery</h1>
        <h3 className="text-xl">Please Login or create account and</h3>
        <h3 className="text-xl">
          get access to unlimited HD images and photos
        </h3>
      </div>
      <div className="w-[60%] md:w-[40%] mx-auto p-6 my-5 shadow-black shadow-lg bg-slate-200 rounded-lg">
        <form onSubmit={handleSubmit}>
          {error ? (
            <p className="text-base font-bold text-red-700 text-center">
              **{error}**
            </p>
          ) : (
            ""
          )}
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
            Sign In
          </button>
        </form>
        <h3 className="my-3 text-center">
          No Account?
          <Link to="/signup" className="mx-2 underline hover:text-red-400">
            Create New
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Signin;
