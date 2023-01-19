import React from 'react'
import '../index.css';
import ProgressiveImage from 'react-progressive-image';

function VideoListItem(props) {
        return (
            <li className="cards_item">
                <div className="card">
                    <a className="overlay" href={'/videos/' + props.video.id}></a>
                    <div className="card_image">
                        <ProgressiveImage src={props.video.cover} placeholder="tiny-image.jpg">
                            {src => (
                                <img src={src} alt="image" />
                            )}
                        </ProgressiveImage>
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