import React from 'react'
import '../index.css';
import ProgressiveImage from 'react-progressive-image';

function EditableVideoListItem(props) {
        return (
            <li className="cards_item">
                <div className="card image_card">
                    <a className="overlay" href={'/videos/' + props.video.id}></a>
                    <div className="card_image">
                    <ProgressiveImage src={props.video.image} placeholder="tiny-image.jpg">
                        {src => (
                            <img src={src} alt="image" />
                        )}
                    </ProgressiveImage>
                        {/* <img src={props.image.image} loading="lazy"/> */}
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">{props.video.title}</h2>
                        <p className="card_text">{props.video.description}</p>
                        <div className="image_list_tags">
                        {props.video.tags && props.video.tags.map((tag, index) => {
                            return(
                                <span key={index}>#{tag}</span>
                            )
                        })}
                        </div>
                    </div>
                    <div className = 'edit_buttons_div'>
                            <button className = "btn btn-sm update_button" onClick = {() => props.editBtn(props.video)}>
                                Update
                            </button>
                            <button className = "btn btn-sm delete_button" onClick = {() => props.deleteBtn(props.video)}>
                                Delete
                            </button>
                        </div>

                </div>

            </li> 
            
        )
    }


export default EditableVideoListItem