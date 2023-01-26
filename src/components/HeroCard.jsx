import React from "react";
import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineClose,
  AiFillCaretDown,
  AiFillCheckCircle,
} from "react-icons/ai";
import { HiInformationCircle, HiShare } from "react-icons/hi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { SlUserFollow } from "react-icons/sl";

const HeroCard = ({ open, close, model }) => {
  const [icon, setIcon] = useState(false);
  const [like, setLike] = useState(false);
  if (!open) return null;
  return (
    <div>
      {model && (
        <div
          className=" w-full fixed top-0 right-0 bottom-0 py-6 px-12 bg-black/80 overflow-y-auto overscroll-contain"
          onClick={close}
        >
          <AiOutlineClose
            size={30}
            color="white"
            className="absolute top-10 left-3 md:left-20 lg:left-36 cursor-pointer"
            onClick={close}
          />
          {/* body section */}
          <div className=" w-full md:w-[80%] lg:w-[70%] mx-auto p-3 py-6 bg-white rounded-lg flex flex-col gap-3">
            {/* top tool section */}
            <div className=" w-full flex flex-col md:flex-row gap-3 items-center justify-between relative">
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
              <div className=" flex items-center font-bold text-white rounded-lg">
                <button className="bg-[#29AB87] hover:bg-[#01796F] px-4 py-3 border-r border-gray-700 rounded-l-lg">
                  Free download
                </button>
                <button className="bg-[#29AB87] hover:bg-[#01796F] px-4 py-3 rounded-r-lg">
                  <AiFillCaretDown size={24} className=" hover:bg-[#01796F]" />
                </button>
              </div>
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
              <button className=" flex items-center gap-2 hover:text-black">
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
