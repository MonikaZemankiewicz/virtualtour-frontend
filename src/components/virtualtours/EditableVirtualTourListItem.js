import React from 'react'
import '../../index.css';
import ProgressiveImage from 'react-progressive-image';

function EditableVirtualTourListItem(props) {
        return (
            <li className="cards_item">
                <div className="card image_card">
                    <a className="overlay" href={'/virtualtours/' + props.virtualtour.id}></a>
                    <div className="card_image">
                    <ProgressiveImage src={props.virtualtour.image} placeholder="tiny-image.jpg">
                        {src => (
                            <img src={src} alt="image" />
                        )}
                    </ProgressiveImage>
                        {/* <img src={props.image.image} loading="lazy"/> */}
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">{props.virtualtour.title}</h2>
                        <p className="card_text">{props.virtualtour.description}</p>
                        <div className="image_list_tags">
                        {props.virtualtour.tags && props.virtualtour.tags.map((tag, index) => {
                            return(
                                <span key={index}>#{tag}</span>
                            )
                        })}
                        </div>
                    </div>
                    <div className = 'edit_buttons_div'>
                            <button className = "btn btn-sm update_button" onClick = {() => props.editBtn(props.virtualtour)}>
                                Update
                            </button>
                            <button className = "btn btn-sm delete_button" onClick = {() => props.deleteBtn(props.virtualtour)}>
                                Delete
                            </button>
                        </div>

                </div>

            </li> 
            
        )
    }


export default EditableVirtualTourListItem