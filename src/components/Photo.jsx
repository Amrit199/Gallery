import React from "react";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineDownload } from "react-icons/ai";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { SlUserFollow } from "react-icons/sl";

const Photo = ({ data, modelimg, modelset }) => {
  const [tip, setTip] = useState(false);
  const [icon, setIcon] = useState(false);
  const [like, setLike] = useState(false);
  const [download, setDownload] = useState(false);
  const [userIcon, setUserIcon] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    modelimg(data);
    modelset(true);
  };
  const handleDownload = async (imageUrl) => {
    try {
      if(imageUrl === data.webformatURL) {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "image";
        a.click();
      } else {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "Video";
        a.click();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className=" w-full relative cursor-pointer"
      onMouseEnter={() => setTip(true)}
      onMouseLeave={() => setTip(false)}
    >
      {/* background image */}
      {data.videos && data.videos ? (
        <video
          src={data.videos.tiny.url}
          className="w-full hover:brightness-75"
          onClick={handleClick}
        />
      ) : (
        <img
          src={data.webformatURL}
          alt={data.tags}
          className="w-full hover:brightness-75"
          onClick={handleClick}
        />
      )}
      {/* collect and like icon */}
      {tip ? (
        <div className="absolute top-3 right-4 flex items-center gap-2">
          <MdOutlineCollectionsBookmark
            size={38}
            color="black"
            className=" bg-white rounded-lg p-2"
            onMouseEnter={() => setIcon(true)}
            onMouseLeave={() => setIcon(false)}
          />
          {icon ? (
            <p className=" absolute bg-white top-10 right-10 p-1 text-sm rounded-lg">
              Collect
            </p>
          ) : (
            ""
          )}
          <AiOutlineHeart
            size={38}
            color="black"
            className=" bg-white rounded-lg p-2"
            onMouseEnter={() => setLike(true)}
            onMouseLeave={() => setLike(false)}
          />
          {like ? (
            <p className=" absolute bg-white top-10 right-0 p-1 text-sm rounded-lg">
              Like
            </p>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {/* creater and download icon */}
      {tip ? (
        <div className=" absolute px-3 bottom-3 w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-2 text-white font-bold p-1">
            <img
              src={data.userImageURL}
              alt="user"
              className="w-10 rounded-full"
              onMouseEnter={() => setUserIcon(true)}
              onMouseLeave={() => setUserIcon(false)}
            />
            {data.user}
            {userIcon ? (
              <div className=" w-56 p-4 absolute bg-white text-black bottom-12 left-2 text-sm rounded-lg flex items-center justify-between">
                <img
                  src={data.userImageURL}
                  alt="user"
                  className="w-10 rounded-full"
                />
                <p className=" font-bold">{data.user}</p>
                <SlUserFollow
                  size={38}
                  color="black"
                  className=" bg-white rounded-lg p-2"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <AiOutlineDownload
            size={38}
            color="black"
            className=" bg-white rounded-lg p-2"
            onMouseEnter={() => setDownload(true)}
            onMouseLeave={() => setDownload(false)}
            onClick={() => handleDownload(data.webformatURL ? data.webformatURL : data.videos.tiny.url)}
          />
          {download ? (
            <p className=" absolute bg-white bottom-11 right-0 p-1 text-sm rounded-lg">
              Download
            </p>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Photo;
