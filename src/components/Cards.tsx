import React from 'react';

interface CardProps {
  title?: string;  // optional
  img?: string;
  desc?: string;
}

const Cards = ({ title, img, desc }: CardProps) => {
  return (
    <div className="p-2 md:p-4 border space-y-2 w-fit max-w-[400px] overflow-clip rounded-md shadow-lg mb-5 ">
      <img
        src={img}
        alt={title || "Image"}
        className="w-[350px] h-auto object-cover rounded-md"
      />

      {title && (
        <h3
          className={`text-white text-lg font-semibold px-3 py-1 rounded-md inline-block
            ${
              title === "Downloads"
                ? "bg-red-500"
                : title === "Videos"
                ? "bg-green-500"
                : "bg-gray-500"
            }`}
        >
          {title}
        </h3>
      )}

      <p className="w-fit  text-gray-700">{desc}</p>
    </div>
  );
};

export default Cards;
