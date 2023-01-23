import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import useCookies from 'react-cookie/cjs/useCookies';

function ImageUploadForm(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [token] = useCookies(['mytoken'])



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(token['mytoken'])
    let form_data = new FormData();
    form_data.append('image', image, image.name);
    form_data.append('title', title);
    form_data.append('description', description);
    form_data.append('owner', token['mytoken']);
    let url = 'http://localhost:8000/api/images/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': `Token ${token['mytoken']}` 

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
                    id="title" 
                    placeholder='Please enter the title' 
                    value={title} 
                    onChange = {e => setTitle(e.target.value)} 
                    required>
                  </input>
                  <label htmlFor = "title" className='form-label'>
                      Description
                  </label>
                  <textarea className='form-control' 
                    id="description" 
                    placeholder='Please enter the description' 
                    rows = "5" 
                    value={description} 
                    onChange = {e => setDescription(e.target.value)} 
                    required>
                  </textarea>
                  <label htmlFor = "title" className='form-label'>
                      Image
                  </label>
                  <input type = "file" 
                    className='form-control' 
                    id="image" 
                    accept="image/png, image/jpeg" 
                    onChange = {e => setImage(e.target.files[0])} 
                    required>
                   </input>
                  <button onClick = {handleSubmit} className='btn btn-success update_image_button'>Upload Image</button>
                </div>
              </div>
          </div>       
      </div>
    )
}

export default ImageUploadForm;
