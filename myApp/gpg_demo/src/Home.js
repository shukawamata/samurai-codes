import React from 'react'
import MainImage from "./images/natural-selection-tour-2021-header-art.jpeg";

const Home = () => {
  return (
    <main>
        <div>
            <img 
                src={MainImage}
                alt="cute dog"
            />
        </div>
        <div>
            <h2>New Topics</h2>
        </div>
        
    </main>
  )
}

export default Home