import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCard from "../components/ItemCard";
import NavMenu from "../components/NavMenu";

const Home = ({searchText}) => {
  const [photos, setPhotos] = useState("");
  // const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchText}&image_type=photo&pretty=true`
      )
      .then((response) => setPhotos(response.data.hits))
      .catch((error) => console.log(error));
  }, [searchText]);
  console.log(photos)
  return (
    <div className=" w-full h-full bg-white">
      <NavMenu />

      <div className=" w-full flex items-center justify-between px-4 py-6">
        <h2 className=" text-2xl">Free Stock Photos</h2>
        <select className=" border border-gray-300 p-4 rounded-lg hover:border-black">
            <option value="trending">Trending</option>
            <option value="new">New</option>
        </select>
      </div>

      <ItemCard photos={photos} />
    </div>
  );
};

export default Home;
