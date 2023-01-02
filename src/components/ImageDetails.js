import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardText, CardTitle, CardFooter } from 'reactstrap';
import '../index.css';
import { Pannellum } from "pannellum-react";
import axios from "axios";    
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";



function ImageDetails(props){

    const editBtn = (image) => {
        props.editBtn(image)
    }
    
        return (
            <Row className="ContentItem">
             <Col xs="3"/>
               <Col xs="12" sm="6">
                    <Card>
                        <Pannellum
                            width="100%"
                            height="500px"
                            image={props.image.image}
                            pitch={10}
                            yaw={180}
                            hfov={110}
                            autoLoad
                            showZoomCtrl={false}
                        >
                        </Pannellum>
                        <CardBody>
                            <CardTitle>
                                {props.image.title}
                            </CardTitle>
                            <CardText>
                                {props.image.description}
                            </CardText>
                            <CardFooter>
                                <div className = 'edit_buttons_div'>
                                    <button className = "btn btn-outline-primary" onClick = {() => editBtn(props.image)}>
                                        Update
                                    </button>
                                    <button className = "btn btn-outline-danger">
                                        Delete
                                    </button>
                                </div>
                            </CardFooter>
                        </CardBody>
                    </Card>
                </Col> 
            </Row>        

        )
}

export default ImageDetails