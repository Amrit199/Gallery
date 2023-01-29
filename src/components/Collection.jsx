import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Collection = () => {
  const [photos, setPhotos] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setPhotos(doc.data()?.savedPhotos);
    });
  }, [user?.email]);

  const photoRef = doc(db, "users", `${user?.email}`);
  const deletePhoto = async (passedID) => {
    try {
      const result = photos.filter((item) => item.id !== passedID);
      await updateDoc(photoRef, {
        savedPhotos: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-full h-full my-5 p-3">
      <h2 className=" text-xl my-2">Collected Photos</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {photos.map((item) => (
            <div
              key={item.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] p-3 inline-block cursor-pointer relative"
            >
              <img
                className="w-full h-full block"
                src={item?.img}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
                <p
                  onClick={() => deletePhoto(item.id)}
                  className="absolute text-white top-4 right-4 hover:text-red-400"
                >
                  <AiOutlineClose size={30} />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Collection;
