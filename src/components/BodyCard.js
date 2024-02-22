import React, { useEffect, useState } from "react";
import { FAKE_POST_API } from "../utils/constants";
import Shimmer from "../utils/Shimmer";
import PostCard from "./Cards/PostCard";
import { Link } from "react-router-dom";

const BodyCard = () => {
  const [AllPosts, setAllPosts] = useState([]);
  const getData = async () => {
    const data = await fetch(FAKE_POST_API);
    const json = await data.json();
    //dispatch(AllPost(json));
    setAllPosts(json);
  };
  useEffect(() => {
    getData();
  }, []);

  if (!AllPosts) return null;
  return AllPosts.length === 0 ? (
    <Shimmer />
  ) : (
    AllPosts.map((postInfo) => (
      <Link to={"/cardInfo/" + postInfo.id}>
        <div key={postInfo.id} >
          <PostCard info={postInfo} />
        </div>
      </Link>
    ))
  );
};

export default BodyCard;
