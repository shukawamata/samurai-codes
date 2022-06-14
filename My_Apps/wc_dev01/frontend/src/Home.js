import React from 'react'

const Home = () => {
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
                    <div className="form-control">
                        <input type="text" name="1st video" placeholder="1st video" required/>
                    </div>
                    <div className="form-control">
                        <input type="text" name="2nd video" placeholder="2nd video" required/>
                    </div>
                    <div className="form-control">
                        <input type="text" name="Item name" placeholder="Item name" required/>
                    </div>
                    <input type="submit" value="Upload" className="btn btn-primary"/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Home