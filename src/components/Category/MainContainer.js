import React from "react";
import CategoryOptions from "./categoryOptions";

const MainContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center  shadow mt-2">
        <CategoryOptions />
      </div>
    </div>
  );
};

export default MainContainer;
