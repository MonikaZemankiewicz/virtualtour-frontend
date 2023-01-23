import React from 'react'
import '../index.css';
import useCookies from 'react-cookie/cjs/useCookies';
import MediaListItem from './MediaListItem';



function MediaList(props) {
  const [token] = useCookies(['mytoken'])

  return (
    <div className="gallery_padding">
       <div className="main">
        <ul className="cards">
        {props.media && props.media.map(item => {
          if(props.type == 'images'){
            return(
              <MediaListItem item={item} key={item.id} type = {props.type}/>
            )
          }   
          else if (props.type == 'videos'){
            return(
              <MediaListItem video={item} key={item.id} type = {props.type}/>
            )
          } 
          else {
            return(
              <MediaListItem item={item} key={item.id} type = {props.type}/>
            )
          }      
        })}
        </ul>
      </div>
    </div> 
  )
}

export default MediaList
