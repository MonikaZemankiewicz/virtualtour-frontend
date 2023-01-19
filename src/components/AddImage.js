import React from 'react'
import APIService from '../APIService'
import { useState, useEffect } from 'react'

function AddImage() {


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addImage = () => {
        APIService.AddImage({title, description})
        .then(resp => console.log(resp))
        
    }

    return (
        <div className='form'>         
            <div className='mb-3'>
                <label htmlFor = "title" className='form-label'>
                    Title
                </label>
                <input type = "text" className='form-control' id="title" placeholder='Please enter the title' value = {title} onChange = {e => setTitle(e.target.value)} required></input>
                
                
                <label htmlFor = "title" className='form-label'>
                    Description
                </label>
                <textarea className='form-control' id="description" placeholder='Please enter the description' rows = "5" value = {description} onChange = {e => setDescription(e.target.value)} required></textarea>
                <button onClick = {addImage} className='btn btn-success update_image_button'>Upload Image</button>
            </div>
        </div>
    )
}

export default AddImage
