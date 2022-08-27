import React from 'react'
import {useNavigate} from "react-router-dom"
import { useState, useEffect, useRef } from 'react'
import axios from "axios";

const Home = () => {
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [item_name, setItem_name] = useState("");
    // const [posts, setPosts] = useState([]);
    // const ref1 = useRef();
    // const ref2 = useRef();

const createPost = () => {
    const data = new FormData();
    data.append("item_name", item_name);
    data.append("images", file1);
    data.append("images", file2);

    axios.get("http://localhost:8080/api/posts", data).then((res) => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
}
   
  return (
    <section className="main">
        <div className="container grid">
            <div className="main-text">
                <h1>Efficient Approach</h1>
                <p>Work out camera provide you a chance to figure out your weak points objectively.  Upload a video of your movement, let's get started! </p>
            </div>

            <div className="main-form card">
                <h2>Quick Start</h2>
                <form onSubmit={createPost}>
                    <p>Upload your video here</p>
                    <div className="form-control">
                        <input type="file" name="file1" id="file1" onChange={(e) => setFile1(e.target.files[0])} required/>
                    </div>
                    <div className="form-control">
                        <input type="file" name="file2" id="file2" onChange={(e) => setFile2(e.target.files[0])} required/>
                    </div>
                    <div className="form-control">
                        <input type="text" name="item_name" placeholder="Type item name here" value={item_name} onChange={(e) => setItem_name(e.target.value) } required/>
                    </div>
                    <div>
                        <input type="submit" value="Upload" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Home