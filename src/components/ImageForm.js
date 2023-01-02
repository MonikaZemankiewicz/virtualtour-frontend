import React from 'react'
import {useState, useEffect} from 'react';
import APIService from '../APIService';

function ImageForm(props) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setTitle(props.image.title)
    setDescription(props.image.description)
  }, [props.image])

  const updateImage = () => {
    APIService.UpdateImage(props.image.id, {title, description})
    .then(resp => props.updatedInformation(resp))
  }

  return (
    <div className='form'>
      {props.image ? (
        
        <div className='mb-3'>
            <label htmlFor = "title" className='form-label'>
                Title
            </label>
            <input type = "text" className='form-control' id="title" placeholder='Please enter the title' value = {title} onChange = {e => setTitle(e.target.value)} required></input>
            
            
            <label htmlFor = "title" className='form-label'>
                Description
            </label>
            <textarea className='form-control' id="description" placeholder='Please enter the description' rows = "5" value = {description} onChange = {e => setDescription(e.target.value)} required></textarea>
            <button onClick = {updateImage} className='btn btn-success update_image_button'>Update Image</button>
        </div>

      ) : null}
    </div>
  )
}

export default ImageForm
