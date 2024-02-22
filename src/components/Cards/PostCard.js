import React from "react";
const PostCard = ({ info }) => {
  const { id, image, title } = info;
  return (
    <div
      className="flex flex-col justify-center items-center  m-4 overflow-hidden bg-white-100 w-72 h-72 rounded-lg  hover:shadow-lg  shadow"
      key={id}
    >
      <div>
        <div className="flex  justify-center items-center -mt-8 ">
          <img className="w-64 h-44 py-2 " alt="coard_image" src={image} />
        </div>
        <p className="font-semibold text-green-400 px-4 ">{title}</p>
      </div>
    </div>
  );
};

export default PostCard;
