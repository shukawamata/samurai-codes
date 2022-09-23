import React from 'react'
import Sidebar from './Sidebar'
import Items from './Items'
import { useState, useEffect, useRef } from 'react'
import axios from "axios";

const Replays = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const imageBaseUrl = "http://localhost:5555/upload/";

  useEffect(() => {
    axios.get("http://localhost:5555/api/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const result = posts.sort((a,b) => {
    return (a.createdAt > b.createdAt) ? -1 : 1;
  }); 

  // console.log(result)
  // console.log(result[0].images[0].name)

  return (
    <section>
      <div className="container_replay">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"container_replay"}/>
        <div className='page-wrap'>
          <div className="video-contents card">
            <video width="600px" height="550px" className="video-content" controls>
              <source src={imageBaseUrl + result[0].images[0].name}/>
            </video>
            <video width="600px" height="550px" className="video-content" controls>
              <source src={imageBaseUrl + result[0].images[0].name}/>
            </video>
          </div>
          <div className="items">
            <Items />
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Replays
