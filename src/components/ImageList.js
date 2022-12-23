import React from 'react'
import '../index.css';
import ImageListItem from './components/ImageListItem'



function ImageList(props) {

  const editBtn = (video) => {
    props.editBtn(video)
  }

  return (
    <div>
      {props.videos && props.videos.map(video => {
        return(
        <ImageListItem item={video} key={video.id} />
        )
      })}
    </div>
  )
}

export default ImageList
