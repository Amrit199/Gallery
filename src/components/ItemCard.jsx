import React from "react";
import { useState } from "react";
import HeroCard from "./HeroCard";
import Photo from "./Photo";

const ItemCard = ({ photos }) => {
  const [model, setModel] = useState("");
  const [openModel, setOpenModel] = useState(false);
  return (
    <div className="w-full h-full px-4">
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        {photos &&
          photos.map((item, index) => (
            <Photo
              key={index}
              data={item}
              modelimg={(item) => setModel(item)}
              modelset={(value) => setOpenModel(value)}
            />
          ))}
      </div>

      <HeroCard
        open={openModel}
        close={() => setOpenModel(false)}
        model={model}
      />
    </div>
  );
};

export default ItemCard;
