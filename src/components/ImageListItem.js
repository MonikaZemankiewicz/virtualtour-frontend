import React from 'react'
import { Button, Row, Col, Card, CardImg, CardBody, CardText, CardTitle, CardFooter } from 'reactstrap';
import '../index.css';

function ImageListItem(props) {
        return (
            <li className="cards_item">
                <div className="card">
                    <a className="overlay" href={'/images/' + props.image.id}></a>
                    <div className="card_image">
                        <img src={props.image.image}/>
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">{props.image.title}</h2>
                        {/* <p className="card_text">{props.image.description}</p> */}
                        <div className="image_list_tags">
                        {props.image.tags && props.image.tags.map(tag => {
                            return(
                                <span>#{tag}</span>
                            )
                        })}
                        </div>
                    </div>
                    <div className = 'edit_buttons_div'>
                            <button className = "btn btn-sm btn-outline-primary" onClick = {() => props.editBtn(props.image)}>
                                Update
                            </button>
                            <button className = "btn btn-sm btn-outline-danger">
                                Delete
                            </button>
                        </div>

                </div>

            </li> 
            
        )
    }


export default ImageListItem