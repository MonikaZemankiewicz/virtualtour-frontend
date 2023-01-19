import { useState, useEffect } from 'react';
import Layout from './Layout';
import AddImage from './AddImage';
import React from 'react';
import axios from 'axios';
import { Col } from 'reactstrap';

class ImageUploadForm extends React.Component {
  state = {
    title: '',
    description: '',
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('title', this.state.title);
    form_data.append('description', this.state.description);
    let url = 'http://localhost:8000/api/images/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };
  
  render() {
    return (
      <div className="App">
        <Layout>
          <div className='page'>
              <div className='image_form'>
                <div className='mb-3'>
                  <label htmlFor = "title" className='form-label'>
                      Title
                  </label>
                  <input type = "text" className='form-control' id="title" placeholder='Please enter the title' value={this.state.title} onChange={this.handleChange} required></input>
                  
                  
                  <label htmlFor = "title" className='form-label'>
                      Description
                  </label>
                  <textarea className='form-control' id="description" placeholder='Please enter the description' rows = "5" value={this.state.description} onChange={this.handleChange} required></textarea>

                  <label htmlFor = "title" className='form-label'>
                      Image
                  </label>
                  <input type = "file" className='form-control' id="image" accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
                  <button onClick = {this.handleSubmit} className='btn btn-success update_image_button'>Update Image</button>
                </div>
              </div>
          </div>  
        </Layout>
        
      </div>
    );
    }
}

export default ImageUploadForm;
