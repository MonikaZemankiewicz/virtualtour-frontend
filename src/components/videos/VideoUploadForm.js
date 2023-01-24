import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import useCookies from 'react-cookie/cjs/useCookies';

function VideoUploadForm(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [videoLink, setVideoLink] = useState('')
  const [token] = useCookies(['mytoken'])



  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('image', image, image.name);
    form_data.append('title', title);
    form_data.append('description', description);
    form_data.append('owner', token['mytoken']);
    form_data.append('video', videoLink);
    let url = 'https://monikazemankiewicz.pythonanywhere.com/api/videos/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f' 

      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

    return (
      <div className="App">
          <div className='page'>
              <div className='image_form'>
                <div className='mb-3'>
                  <label htmlFor = "title" className='form-label'>
                      Title
                  </label>
                  <input type = "text" 
                    className='form-control' 
                    id="title" placeholder='Please enter the title' 
                    value={title} 
                    onChange = {e => setTitle(e.target.value)} 
                    required>
                  </input>    

                  <label htmlFor = "title" className='form-label'>
                      Description
                  </label>
                  <textarea 
                    className='form-control' 
                    id="description" 
                    placeholder='Please enter the description' 
                    rows = "5" 
                    value={description} 
                    onChange = {e => setDescription(e.target.value)} 
                    required>
                  </textarea>

                  <label htmlFor = "title" className='form-label'>
                      Cover
                  </label>
                  <input type = "file" 
                    className='form-control' 
                    id="image" accept="image/png, image/jpeg"  
                    onChange = {e => setImage(e.target.files[0])} 
                    required>
                  </input> 

                  <label htmlFor = "title" className='form-label'>
                      Video Link
                  </label>
                  <input type = "url" 
                    className='form-control' 
                    id="title" 
                    placeholder='Please enter the title' 
                    value={videoLink} 
                    onChange = {e => setVideoLink(e.target.value)} 
                    required>
                  </input>  
                  
                  <button onClick = {handleSubmit} className='btn btn-success update_image_button'>Upload Video </button>
                </div>
              </div>
          </div>       
      </div>
    )
}

export default VideoUploadForm;
