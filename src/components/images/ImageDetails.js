import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardText, CardTitle, CardFooter } from 'reactstrap';
import '../../index.css';
import { Pannellum } from "pannellum-react";
import { saveAs } from 'file-saver'



function ImageDetails(props){


        const downloadImage = () => {
          saveAs(props.image.image, 'download.png') // Put your image url here.
        }

        return (
            <Row className="ContentItem">
             <Col xs="3"/>
               <Col xs="12" sm="6">
                    <Card className='details_card'>
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
                            <CardTitle className='details_card_title'>
                                {props.image.title}
                            </CardTitle>
                            <CardText className='details_card_description'>
                                {props.image.description}
                            </CardText>
                            <div className='download_button_div'>
                                <button 
                                    className='btn btn-success update_image_button download_button'
                                    onClick = {downloadImage}
                                    >
                                    Download
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col> 
            </Row>        

        )
}

export default ImageDetails