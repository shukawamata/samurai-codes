import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5555/api/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);
  console.log(posts);
  const linkList = posts.map((post) => {
    return (
      <Link to={`/replays/${post._id}`} key={post._id}>
        {post.item_name}
      </Link>
    );
  });
  return (
    <Menu className="side-bar">
      <div>
        <h1>Replays</h1>
      </div>
      {linkList}
    </Menu>
  );
};

export default Sidebar;
