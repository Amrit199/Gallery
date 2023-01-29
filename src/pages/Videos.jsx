import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import NavMenu from "../components/NavMenu";
import ItemCard from "../components/ItemCard";

const Videos = ({ searchText }) => {
  const [videos, setVideos] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/videos/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchText}`
      )
      .then((response) => setVideos(response.data.hits))
      .catch((error) => console.log(error));
  }, [searchText]);

  const [data, setData] = useState("")
  const onSelectionChange = (e) => {
    e.preventDefault()
    setData(e.target.value)

    if(data === "new") {
      videos.sort((a, b) => a.views - b.views)
    } else if(data === "trending") {
      videos.sort((a, b) => b.likes - a.likes)
    }
  }

  return (
    <div className=" w-full h-full bg-white">
      <NavMenu />

      <div className=" w-full flex items-center justify-between px-4 py-6">
        <h2 className=" text-xl md:text-2xl">Free Stock Videos</h2>
        <select onChange={onSelectionChange} className=" border border-gray-300 p-3 md:p-4 rounded-lg hover:border-black">
          <option value="trending">Trending</option>
          <option value="new">New</option>
        </select>
      </div>

      <ItemCard photos={videos} />
    </div>
  );
};

export default Videos;
