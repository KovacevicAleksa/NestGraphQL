import React from "react";

const Card = () => {
  return (
    <div className="block max-w-[18rem] rounded-lg bg-primary text-white shadow-secondary-1">
      <div className="border-b-2 border-black/20 px-6 py-3 text-white">
        Header
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">
          Primary card title
        </h5>
        <p className="text-base">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
      </div>
    </div>
  );
};

export default Card;