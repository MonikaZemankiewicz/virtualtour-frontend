import React from 'react'
import '../index.css';
import { Row, CardGroup } from 'reactstrap';
import ImageListItem from './ImageListItem'
import ImageForm from './ImageForm';



function ImageList(props) {

  const editBtn = (image) => {
    props.editBtn(image)
}

  return (
    <div className="gallery_padding">
       <div className="main">
        <ul className="cards">
        {props.images && props.images.map(image => {
          return(
              <ImageListItem image={image} key={image.id} editBtn = {editBtn} />
          )
        })}
        </ul>
      </div>
    </div>
     
    
      
      
    
  )
}

export default ImageList
