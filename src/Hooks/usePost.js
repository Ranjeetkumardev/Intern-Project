import { useEffect, useState } from "react";
import { FAKE_POST_API } from "../utils/constants";
// this is a custome Hooks
const usePost = (postId) => {
  const [postMenu, setPostMenu] = useState(null);

  useEffect(() => {
    getPostInfo();
  }, []);

  async function getPostInfo() {
    const data = await fetch(FAKE_POST_API + "/" + postId);
    const json = await data.json();
    //console.log(json);
    setPostMenu(json);
  }
  return postMenu;
};

export default usePost;
