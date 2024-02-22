import React from "react";
import MainContainer from "./Category/MainContainer";
import BodyCard from "./BodyCard";

const Body = () => {
  return (
    <div>
      <MainContainer />
      <div className="flex flex-wrap ml-12">
        <BodyCard />
      </div>
    </div>
  );
};

export default Body;
