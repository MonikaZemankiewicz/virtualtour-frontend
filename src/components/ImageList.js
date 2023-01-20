import React from 'react'
import '../index.css';
import ImageListItem from './ImageListItem'
import APIService from '../APIService';
import useCookies from 'react-cookie/cjs/useCookies';



function ImageList(props) {
  const [token] = useCookies(['mytoken'])

  return (
    <div className="gallery_padding">
       <div className="main">
        <ul className="cards">
        {props.images && props.images.map(image => {
          return(
              <ImageListItem image={image} key={image.id}/>
          )
        })}
        </ul>
      </div>
    </div> 
  )
}

export default ImageList
