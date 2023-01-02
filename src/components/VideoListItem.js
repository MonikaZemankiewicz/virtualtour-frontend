import React from 'react'
import '../index.css';

function VideoListItem(props) {
        return (
            <li className="cards_item">
                <div className="card">
                    <a className="overlay" href={'/videos/' + props.video.id}></a>
                    <div className="card_image">
                        <img src={props.video.cover}/>
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">{props.video.title}</h2>
                        <p className="card_text">{props.video.description}</p>
                        <div className="image_list_tags">
                        {props.video.tags && props.video.tags.map(tag => {
                            return(
                                <span>#{tag}</span>
                            )
                        })}
                    </div>
                    </div>
                    
                </div>
            </li> 
            
        )
    }


export default VideoListItem