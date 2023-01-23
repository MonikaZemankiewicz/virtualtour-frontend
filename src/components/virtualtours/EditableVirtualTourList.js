import React from 'react'
import '../../index.css';
import EditableVirtualTourListItem from './EditableVirtualTourListItem'
import APIService from '../../APIService';
import useCookies from 'react-cookie/cjs/useCookies';



function EditableVirtualTourList(props) {
  const [token] = useCookies(['mytoken'])

  const editBtn = (virtualtour) => {
    props.editBtn(virtualtour)
  }

  const deleteBtn = (virtualtour) => {
    APIService.DeleteVirtualTour(virtualtour.id, token['mytoken'])
     .then(() => props.deleteBtn(virtualtour))
     .catch(error => console.log(error))

  }

  return (
    <div className="gallery_padding">
       <div className="main">
        <ul className="cards">
        {props.virtualtours && props.virtualtours.map(virtualtour => {
          return(
              <EditableVirtualTourListItem virtualtour={virtualtour} key={virtualtour.id} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
          )
        })}
        </ul>
      </div>
    </div> 
  )
}

export default EditableVirtualTourList
