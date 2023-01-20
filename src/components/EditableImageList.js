import React from 'react'
import '../index.css';
import EditableImageListItem from './EditableImageListItem'
import APIService from '../APIService';
import useCookies from 'react-cookie/cjs/useCookies';



function EditableImageList(props) {
  const [token] = useCookies(['mytoken'])

  const editBtn = (image) => {
    props.editBtn(image)
  }

  const deleteBtn = (image) => {
    APIService.DeleteImage(image.id, token['mytoken'])
     .then(() => props.deleteBtn(image))
     .catch(error => console.log(error))

  }

  return (
    <div className="gallery_padding">
       <div className="main">
        <ul className="cards">
        {props.images && props.images.map(image => {
          return(
              <EditableImageListItem image={image} key={image.id} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
          )
        })}
        </ul>
      </div>
    </div> 
  )
}

export default EditableImageList
