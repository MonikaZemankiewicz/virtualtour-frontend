import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import '../index.css';
import {PannellumVideo } from "pannellum-react";
import myVideo from "../images/mountains.mp4";
import ThreeSixty from 'react-360-view'
import VrPlayer from 'react-vr-player'

class VideoDetails extends React.Component {
    render(){
    // const sources = [ // Declare an array of video sources
    // { url: 'http://127.0.0.1:8000/media/videos/mountains.mp4', type: 'video/mp4' },
    // { url: 'http://127.0.0.1:8000/media/videos/mountains.mp4', type: 'video/mp4' }

    // ];
    // const keys = { // If you want to re-define the keys, here are the defaults
    //     left: 'A',
    //     right: 'D',
    //     up: 'W',
    //     down: 'S',
    //     rotateLeft: 'Q',
    //     rotateRight: 'E',
    //     fullScreen: 'F',
    //     zeroSensor: 'Z',
    //     playPause: ' '
    // };
        return (
            <Row className="ContentItem">
             <Col xs="3"/>
               <Col xs="12" sm="6">
                    <Card>
                        {/* <VrPlayer
                            sources={sources}
                            // brand="Some Brand Name"
                            // title="Some Video Title"
                            keys={keys} 
                            /> */}
                            <PannellumVideo
                                video={myVideo}
                                loop
                                width="100%"
                                height="600px"
                                pitch={10}
                                yaw={180}
                                hfov={140}
                                minHfov={50}
                                maxHfov={180}
                                >
                            </PannellumVideo>
                        <CardBody>
                            <CardTitle>
                                {this.props.video.title}
                            </CardTitle>
                            <CardText>
                                {this.props.video.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col> 
            </Row>        

        )
        }
}

export default VideoDetails