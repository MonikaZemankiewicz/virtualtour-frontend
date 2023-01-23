import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import '../index.css';
import {PannellumVideo } from "pannellum-react";
import myVideo from "../images/mountains.mp4";
import ThreeSixty from 'react-360-view'
import VrPlayer from 'react-vr-player'
import ReactPlayer from 'react-player/lazy'


function VideoDetails(props) {
        return (
            <div>
            <Row className="ContentItem">
             <Col xs="3"/>
               <Col xs="12" sm="6">
                    <Card  className='image_card video_card'>
                    <ReactPlayer url={props.video.video} className='video' />

                        <CardBody className='video_card_body'>
                            <CardTitle className='details_card_title'>
                                {props.video.title}
                            </CardTitle>
                            <CardText className='details_card_description'>
                                {props.video.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col> 
            </Row>  
            </div>
                        
        )
}

export default VideoDetails