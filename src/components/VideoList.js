import React from 'react'

function VideoList(props) {

  const editBtn = (video) => {
    props.editBtn(video)
  }

  return (
    <div>
      {props.videos && props.videos.map(video => {
        return(
        <div key = {video.id}> 
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <p>{video.cover}</p>
          <img src={video.cover}/>
          <div className='row'>
            {/* <div className='col-md-1'>
                <button className='btn btn-primary' onClick = {() => editBtn(video)}>Update</button>
            </div>
            <div className='col-md-2'>
                <button className='btn btn-danger'>Delete</button>
            </div> */}
            <hr className='hrclass'/>
           </div>
        </div>
        )
      })}
    </div>
  )
}

export default VideoList
