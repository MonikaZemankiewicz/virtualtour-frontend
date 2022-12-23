import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import '../index.css';
import { Pannellum } from "pannellum-react";

class ContentItem extends React.Component {
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

function VideoList(props) {

  const editBtn = (video) => {
    props.editBtn(video)
  }

  return (
    <div>
      {props.videos && props.videos.map(video => {
        return(
        <ContentItem item={video} key={video.id} />
        // <div key = {video.id}> 
        //   <h2>{video.title}</h2>
        //   <p>{video.description}</p>
        //   <p>{video.cover}</p>
        //   <img src={video.cover}/>
        //   <div className='row'>
        //     {/* <div className='col-md-1'>
        //         <button className='btn btn-primary' onClick = {() => editBtn(video)}>Update</button>
        //     </div>
        //     <div className='col-md-2'>
        //         <button className='btn btn-danger'>Delete</button>
        //     </div> */}
        //     <hr className='hrclass'/>
        //    </div>
        // </div>
        )
      })}
    </div>
  )
}

export default VideoList
