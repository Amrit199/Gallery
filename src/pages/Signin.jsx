import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Signin = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, createUser } = UserAuth();

  // added from signup page
  const handleNewuser = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      // await signIn(email, password);
      setIsLogin(!isLogin)
      closeModal();
      console.log("I have signUp successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      closeModal();
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
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-50 z-50">
      <div className="max-w-md mx-auto bg-white rounded-lg p-6 my-8 relative">
        <AiOutlineClose
          onClick={closeModal}
          size={30}
          className=" absolute top-1 right-1 cursor-pointer"
          color="black"
        />
        {isLogin ? (
          <div className=" py-4">
            <h1 className="text-3xl text-center font-bold">
              Welcome to the Image Gallery
            </h1>
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
              <button
                type="submit"
                className="rounded-md w-full py-2 bg-blue-500 text-white mb-4"
              >
                Sign In
              </button>
            </form>
            <div className="my-3 flex items-center justify-center gap-2">
              <h3>No Account?</h3>
              <button
                className=" text-red-600 transition-colors hover:text-red-900"
                onClick={() => setIsLogin(false)}
              >
                Create New
              </button>
            </div>
          </div>
        ) : (
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
            <form onSubmit={handleNewuser}>
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
        )}
      </div>
    </div>
  );
};

export default Signin;
