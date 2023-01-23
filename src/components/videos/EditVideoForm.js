import React from 'react'
import {useState, useEffect} from 'react';
import APIService from '../../APIService';
import useCookies from 'react-cookie/cjs/useCookies';


function EditVideoForm(props) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [token] = useCookies(['mytoken'])


  useEffect(() => {
    setTitle(props.video.title)
    setDescription(props.video.description)
  }, [props.video])

  const updateVideo = () => {
    APIService.UpdateVideo(props.video.id, {title, description}, token['mytoken'])
    .then((resp) => {
      props.updatedInformation(resp)
      props.closeForm()
    })
  }

  return (
    <div className='gallery_padding'>
      <div className='image_form'>
        {props.video ? (
          
          <div className='mb-3'>
              <label htmlFor = "title" className='form-label'>
                  Title
              </label>
              <input type = "text" className='form-control' id="title" placeholder='Please enter the title' value = {title} onChange = {e => setTitle(e.target.value)} required></input>
              
              
              <label htmlFor = "title" className='form-label'>
                  Description
              </label>
              <textarea className='form-control' id="description" placeholder='Please enter the description' rows = "5" value = {description} onChange = {e => setDescription(e.target.value)} required></textarea>
              <button onClick = {updateVideo} className='btn btn-success update_image_button'>Update Video</button>
              <button onClick = {props.closeForm} className='btn btn-info update_image_button'>Cancel</button>

          </div>

        ) : null}
      </div>
    </div>
    
  )
}

export default EditVideoForm
