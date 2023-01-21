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
                <div className='video_player'>
                    <ReactPlayer url={props.video.video} className='video' />
                </div>
            </div>
                        
        )
}

export default VideoDetails