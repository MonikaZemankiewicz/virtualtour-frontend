import React from 'react'
import '../index.css';
import { Row, CardGroup } from 'reactstrap';

import ImageListItem from './ImageListItem'



function ImageList(props) {

  return (
      <div className="main">
        <ul className="cards">
        {props.images && props.images.map(image => {
          return(
              <ImageListItem image={image} key={image.id} />
          )
        })}
        </ul>
      </div>
    
      
      
    
  )
}

export default ImageList
