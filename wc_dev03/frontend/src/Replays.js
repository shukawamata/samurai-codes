import React from "react";
import Sidebar from "./Sidebar";
import Items from "./Items";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Replays = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const imageBaseUrl = "http://localhost:5555/upload/";
  const { post_id } = useParams();

  console.log(post_id);

  useEffect(() => {
    if (post_id) {
      axios.get(`http://localhost:5555/api/posts/${post_id}`).then((res) => {
        setPosts([]);
        setPost(res.data);
      });
    } else {
      axios.get("http://localhost:5555/api/posts").then((res) => {
        setPosts(res.data);
      });
    }
  }, [post_id]);

  const result = posts.sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : 1;
  });

  console.log(result.length > 0 && result[0].images);
  console.log(result);
  console.log(post.images);

  const imageList =
    post.images &&
    post.images.map((image) => {
      return (
        <div key={image.image_id}>
          <video
            width="600px"
            height="550px"
            className="video-content"
            controls
          >
            <source src={imageBaseUrl + image.name} />
          </video>
        </div>
      );
    });
  console.log(imageList);

  return (
    <section>
      <div className="container_replay">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"container_replay"}
        />
        <div className="page-wrap">
          {result.length > 0 && result[0].images.length > 0 ? (
            <div className="video-contents card">
              <video
                width="600px"
                height="550px"
                className="video-content"
                controls
              >
                <source src={imageBaseUrl + result[0].images[0].name} />
              </video>
              <video
                width="600px"
                height="550px"
                className="video-content"
                controls
              >
                <source src={imageBaseUrl + result[0].images[1].name} />
              </video>
            </div>
          ) : post_id ? (
            post && <div className="video-contents card">{imageList}</div>
          ) : (
            <>ないよ</>
          )}
          <div className="items">
            <Items />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Replays;
