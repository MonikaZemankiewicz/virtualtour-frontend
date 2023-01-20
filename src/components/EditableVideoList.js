import React from 'react'
import '../index.css';
import EditableVideoListItem from './EditableVideoListItem'
import APIService from '../APIService';
import useCookies from 'react-cookie/cjs/useCookies';



function EditableVideoList(props) {
  const [token] = useCookies(['mytoken'])

  const editBtn = (video) => {
    props.editBtn(video)
  }

  const deleteBtn = (video) => {
    APIService.DeleteImage(video.id, token['mytoken'])
     .then(() => props.deleteBtn(video))
     .catch(error => console.log(error))

  }

  return (
    <div className="gallery_padding">
       <div className="main">
        <ul className="cards">
        {props.videos && props.videos.map(video => {
          return(
              <EditableVideoListItem video={video} key={video.id} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
          )
        })}
        </ul>
      </div>
    </div> 
  )
}

export default EditableVideoList
