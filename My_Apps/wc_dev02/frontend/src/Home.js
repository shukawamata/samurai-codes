import React from 'react'
import {useNavigate} from "react-router-dom"
import { useState, useEffect, useRef } from 'react'

const Home = () => {
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [item_name, setItem_name] = useState("");
    const ref1 = useRef();
    const ref2 = useRef();
   
  return (
    <section className="main">
        <div className="container grid">
            <div className="main-text">
                <h1>Efficient Approach</h1>
                <p>Work out camera provide you a chance to figure out your weak points objectively.  Upload a video of your movement, let's get started! </p>
            </div>

            <div className="main-form card">
                <h2>Quick Start</h2>
                <form>
                    <p>Upload your video here</p>
                    <div className="form-control">
                        <input ref={ref1} type="file" name="file1" id="file1" onChange={(e) => setFile1(e.target.files[0])} required/>
                    </div>
                    <div className="form-control">
                        <input ref={ref2} type="file" name="file2" id="file2" onChange={(e) => setFile2(e.target.files[0])} required/>
                    </div>
                    <div className="form-control">
                        <input type="text" name="item_name" placeholder="Type item name here" value={item_name} onChange={(e) => setItem_name(e.target.value)} required/>
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