import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import '../index.css';
import {PannellumVideo } from "pannellum-react";
import myVideo from "../images/mountains.mp4";

function VideoDetails(props){
    
        return (
            <Row className="ContentItem">
             <Col xs="3"/>
               <Col xs="12" sm="6">
                    <Card>
                        <PannellumVideo
                            video={props.video.video}
                            
                            >
                        </PannellumVideo>
                        <CardBody>
                            <CardTitle>
                                {props.video.title}
                            </CardTitle>
                            <CardText>
                                {props.video.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col> 
            </Row>        

        )
}

export default VideoDetails