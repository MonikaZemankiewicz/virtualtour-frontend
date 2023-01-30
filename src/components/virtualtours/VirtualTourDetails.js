import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import '../../index.css';
import ReactPlayer from 'react-player/lazy'
import profileicon from '../../images/profile-icon.png'



function VirtualTourDetails(props) {

    const openVirtualTour = () => {
        window.open(props.virtualtour.link, "_blank");
    }
        return (
            <div>
            <Row className="ContentItem">
             <Col xs="3"/>
               <Col xs="12" sm="6">
                    <Card  className='details_card'>
                        <CardImg 
                            src={props.virtualtour.image}>                                 
                        </CardImg>
                        <CardBody className='video_card_body'>
                            <CardTitle className='details_card_title'>
                                {props.virtualtour.title}
                            </CardTitle>
                            <CardText className='details_card_description'>
                                {props.virtualtour.description}
                            </CardText>
                            <div className="card_username_div">
                                <img className = "icon_card" src = {profileicon}></img>    
                                <p className='username_card'>{props.virtualtour.owner}</p>
                            </div>
                            <hr className='profile_heading_line'></hr>
                            <div className='download_button_div'>
                                <button 
                                    className='btn btn-success update_image_button download_button'
                                    onClick = {openVirtualTour}
                                    >
                                    Visit virtual tour
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col> 
            </Row>  
            </div>
                        
        )
}

export default VirtualTourDetails