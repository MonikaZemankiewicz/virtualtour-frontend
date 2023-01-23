import React from 'react'
import '../index.css';
import ProgressiveImage from 'react-progressive-graceful-image';

function MediaListItem(props) {
        return (
            <li className="cards_item">
                <div className="card image_card">
                    <a className="overlay" href={props.type + '/' + props.item.id}></a>
                    <div className="card_image">
                        <ProgressiveImage src={props.item.image} placeholder={props.item.image}>
                            {(src, loading) => (
                                <img
                                className={`image${loading ? " loading" : " loaded"}`}
                                src={src}
                                alt={props.item.title}
                                />
                            )}
                        </ProgressiveImage>
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">{props.item.title}</h2>
                        <p className="card_text">{props.item.description}</p>
                        <div className="image_list_tags">
                        {props.item.tags && props.item.tags.map((tag, index) => {
                            return(
                                <span key={index}>#{tag}</span>
                            )
                        })}
                        </div>
                    </div>

                </div>

            </li> 
            
        )
    }


export default MediaListItem