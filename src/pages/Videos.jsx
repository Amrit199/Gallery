import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import VideoCard from "../components/VideoCard";
import NavMenu from "../components/NavMenu";

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
  console.log(videos);
  return (
    <div className=" w-full h-full bg-white">
      <NavMenu />

      <VideoCard videos={videos} />
    </div>
  );
};

export default Videos;
