import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import '../index.css';
import { Pannellum } from "pannellum-react";

class ImageListItem extends React.Component {
    render() {
        return (
            <Row className="ContentItem">
             <Col xs="3"/>
               <Col xs="12" sm="6">
                    <Card>
                        <Pannellum
                            width="100%"
                            height="500px"
                            image={this.props.item.cover}
                            pitch={10}
                            yaw={180}
                            hfov={110}
                            autoLoad
                            showZoomCtrl={false}
                        >
                        </Pannellum>
                        <CardBody>
                            <CardTitle>
                                {this.props.item.title}
                            </CardTitle>
                            <CardText>
                                {this.props.item.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col> 
            </Row>
           

        )
    }
}

export default ImageListItem