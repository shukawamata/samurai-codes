import ReactPlayer from 'react-player'
import VideoGuideLocalPath from './video/IMG_0074.mp4'

const Replays = () => {
  return (
    <section>
      <div className="container_replay">
        <div className="side-bar">
          side-bar
        </div>
        <div className="video-contents">
          <div className="video-content">
            <ReactPlayer max-width="100%"　url={VideoGuideLocalPath} controls/>
          </div>
          <div className="video-content">
            <ReactPlayer url={VideoGuideLocalPath} controls/>
          </div>
        </div>
        <div className="form-label">
          form-name
        </div>
        <div className="form-comment">
          form-comment
        </div>
      </div>
    </section>
    
  )
}

export default Replays
