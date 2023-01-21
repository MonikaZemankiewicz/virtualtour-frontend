import React from 'react'
import '../index.css';
import placeholder from '../images/placeholder.jpg'
import ProgressiveImage from 'react-progressive-graceful-image';
function ImageListItem(props) {
        return (
            <li className="cards_item">
                <div className="card image_card">
                    <a className="overlay" href={'/images/' + props.image.id}></a>
                    <div className="card_image">
                    <ProgressiveImage src={props.image.image} placeholder={props.image.image}>
                        {(src, loading) => (
                            <img
                            className={`image${loading ? " loading" : " loaded"}`}
                            src={src}
                            alt={props.image.title}
                            />
                        )}
                    </ProgressiveImage>
                        {/* <img src={props.image.image} loading="lazy"/> */}
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">{props.image.title}</h2>
                        <p className="card_text">{props.image.description}</p>
                        <div className="image_list_tags">
                        {props.image.tags && props.image.tags.map((tag, index) => {
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


export default ImageListItem