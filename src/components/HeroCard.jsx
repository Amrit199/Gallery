import React from "react";
import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineClose,
  AiFillCheckCircle,
} from "react-icons/ai";
import { HiInformationCircle, HiShare } from "react-icons/hi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { SlUserFollow } from "react-icons/sl";

const HeroCard = ({ open, close, model }) => {
  const [icon, setIcon] = useState(false);
  const [like, setLike] = useState(false);

  const handleDownload = async (imageUrl) => {
    try {
      if (imageUrl === model.webformatURL) {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "image";
        a.click();
      } else {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Video";
        a.click();
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (!open) return null;
  return (
    <div>
      {model && (
        <div
          className=" w-full fixed top-0 right-0 bottom-0 py-6 px-2 bg-black/80 overflow-y-auto overscroll-y-none"
          onClick={close}
        >
          <AiOutlineClose
            size={30}
            className="absolute md:text-white top-10 right-3 md:left-10 lg:left-28 cursor-pointer"
            onClick={close}
          />
          {/* body section */}
          <div className=" w-full md:w-[80%] lg:w-[70%] mx-auto p-1 sm:p-3 py-6 bg-white rounded-lg flex flex-col gap-3">
            {/* top tool section */}
            <div className=" w-full flex flex-col md:flex-row gap-3 items-center justify-between lg:justify-around relative">
              <div className=" flex items-center gap-2">
                <div className=" relative">
                  <MdOutlineCollectionsBookmark
                    size={55}
                    color="black"
                    className=" bg-white cursor-pointer border border-gray-300 transition-colors hover:border-black rounded-lg p-3"
                    onMouseEnter={() => setIcon(true)}
                    onMouseLeave={() => setIcon(false)}
                  />
                  {icon ? (
                    <p className=" absolute bg-white top-14 left-0 p-1 text-sm rounded-lg">
                      Collect
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className=" relative">
                  <AiOutlineHeart
                    size={55}
                    color="black"
                    className=" bg-white cursor-pointer border border-gray-300 transition-colors hover:border-black rounded-lg p-3"
                    onMouseEnter={() => setLike(true)}
                    onMouseLeave={() => setLike(false)}
                  />
                  {like ? (
                    <p className=" absolute bg-white top-14 left-0 p-1 text-sm rounded-lg">
                      Like
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <button
                onClick={() =>
                  handleDownload(
                    model.webformatURL
                      ? model.webformatURL
                      : model.videos.tiny.url
                  )
                }
                className="bg-[#29AB87] hover:bg-[#01796F] text-white font-bold px-4 py-3"
              >
                Free download
              </button>
            </div>
            {/* image */}
            <div className="w-full">
              {model.videos && model.videos ? (
                <video
                  src={model.videos.tiny.url}
                  autoPlay={true}
                  controls={true}
                  className="w-full object-contain"
                />
              ) : (
                <img
                  src={model.webformatURL}
                  alt="hero images"
                  className="w-full object-contain"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                />
              )}
            </div>
            {/* bottom tool section */}
            <div className=" w-[90%] mx-auto flex text-gray-500 items-center justify-between">
              <button className=" flex items-center gap-2 hover:text-black">
                <AiFillCheckCircle title="Free to use" size={20} />
                <p>Free to use</p>
              </button>
              <div className=" flex items-center gap-2">
                <button className=" border border-gray-500 hover:border-black p-3 rounded-lg">
                  <HiInformationCircle size={25} />
                </button>
                <button className=" border border-gray-500 hover:border-black p-3 rounded-lg">
                  <HiShare size={25} />
                </button>
              </div>
            </div>

            {/* user info */}
            <div className="w-[90%] mx-auto flex text-gray-500 items-center justify-between">
              <button className=" flex flex-wrap items-center gap-2 hover:text-black">
                <img
                  src={model.userImageURL}
                  alt="user"
                  className="w-14 md:w-20 rounded-full"
                />
                <p className=" text-base md:text-xl font-bold">{model.user}</p>
              </button>
              <button className=" border border-gray-500 hover:border-black p-3 rounded-lg">
                <SlUserFollow size={25} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroCard;
