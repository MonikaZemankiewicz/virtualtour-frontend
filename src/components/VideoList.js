import React from 'react'
import '../index.css';
import VideoListItem from './VideoListItem'



function VideoList(props) {

  return (
      <div className="main">
        <ul className="cards">
        {props.videos && props.videos.map(video => {
          return(
              <VideoListItem video={video} key={video.id} />
          )
        })}
        </ul>
      </div>
    
      
      
    
  )
}

export default VideoList
