import ReactPlayer from 'react-player'
import VideoGuideLocalPath from './video/IMG_0074.mp4'
import Sidebar from './Sidebar'
import Items from './Items'

const Replays = () => {
  return (
    <section>
      <div className="container_replay">
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="video-contents card">
          <div className="video-content">
            <ReactPlayer width="600px" height="550px" url={VideoGuideLocalPath} controls/>
          </div>
          <div className="video-content">
            <ReactPlayer width="600px" height="550px" url={VideoGuideLocalPath} controls/>
          </div>
        </div>
        <div className="items">
          <Items />
        </div>
      </div>
    </section>
    
  )
}

export default Replays
