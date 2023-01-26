import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Signin from "../pages/Signin";

const Navbar = ({ searchTerm }) => {
  const [searchText, setSearchText] = useState("");
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleView = () => {
    setView(false);
    setSearchText("");
    searchTerm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm(searchText);
    navigate(`/search/${searchText}/`);
    setView(true);
  };
  return (
    <div className={`"w-full relative" ${view ? "h-16" : "h-[450px] w-full relative"}`}>
      {view ? (
        ""
      ) : (
        <img
          src="https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg"
          // src="/assets/hero.jpg"
          alt="hero"
          className="w-full h-full object-cover brightness-50"
        />
      )}
      {/* top left logo*/}
      <div className=" absolute w-full top-4 px-7 cursor-pointer flex items-center justify-between gap-4">
        <Link to={"/"} onClick={handleView} className=" w-16">
          <img
            src="/assets/logo.png"
            alt="logo"
            className=" w-full rounded-lg"
          />
        </Link>
        {view ? (
          <form
            onSubmit={handleSubmit}
            className=" w-[50%] md:w-[70%] relative"
          >
            <input
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              type="text"
              placeholder="eg. computer, cats, mountains"
              className="text-xl p-2 rounded-lg w-full bg-gray-100 text-black"
            />
            <AiOutlineSearch
              size={22}
              color="gray"
              onClick={handleSubmit}
              className="absolute top-[50%] right-2 transform translate-y-[-50%] cursor-pointer text-black"
            />
          </form>
        ) : (
          ""
        )}
        <div className=" flex items-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className={
              view
                ? "bg-black text-white p-3 font-bold rounded-xl"
                : "bg-white text-black p-3 font-bold rounded-xl"
            }
          >
            Join
          </button>
          <AiOutlineMenu
            color={`${view ? "black" : "white"}`}
            size={30}
            className=" cursor-pointer"
          />
        </div>
      </div>
      {/* search bar and titles */}
      {view ? (
        ""
      ) : (
        <div className=" absolute w-full px-7 top-[50%] left-[50%] transfrom translate-x-[-50%] translate-y-[-50%]">
          <div className=" w-full md:w-[60%] mx-auto flex flex-col items-start gap-6 text-white">
            <h1 className=" text-3xl md:text-4xl text-center">
              The best free stock photos, royalty free images shared by
              creators.
            </h1>
            <div className="w-full flex items-center justify-center">
              <form onSubmit={handleSubmit} className="w-full relative">
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  type="text"
                  placeholder="eg. computer, cats, mountains"
                  className="text-xl p-3 rounded-lg w-full text-black"
                />
                <AiOutlineSearch
                  size={22}
                  color="gray"
                  onClick={handleSubmit}
                  className="absolute top-[50%] right-2 transform translate-y-[-50%] cursor-pointer text-black"
                />
              </form>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className=" text-white/70">Trending:</span>
              <p className="font-bold cursor-pointer hover:text-white/70">
                crap,
              </p>
              <p className="font-bold cursor-pointer hover:text-white/70">
                landscape,
              </p>
              <p className="font-bold cursor-pointer hover:text-white/70">
                beautiful,
              </p>
              <p className="font-bold cursor-pointer hover:text-white/70">
                nature,
              </p>
              <p className="font-bold cursor-pointer hover:text-white/70">
                car
              </p>
              <BsThreeDots
                size={24}
                className=" rounded-full p-1 bg-white/20 cursor-pointer hover:bg-white/40"
              />
            </div>
          </div>
          {/* <Searchbar searchTerm={searchTerm}/> */}
        </div>
      )}
      {showModal && <Signin closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default Navbar;
