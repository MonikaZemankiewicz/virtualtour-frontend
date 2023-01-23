import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import '../../index.css';
import ReactPlayer from 'react-player/lazy'


function VideoDetails(props) {
    
    const openVideo = () => {
        window.open(props.video.video, "_blank");
    }
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
                            <div className='download_button_div'>
                                <button 
                                    className='btn btn-success update_image_button download_button'
                                    onClick = {openVideo}
                                    >
                                    Open Original Video
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col> 
            </Row>  
            </div>
                        
        )
}

export default VideoDetails