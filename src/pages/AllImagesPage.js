import React from 'react'
import Layout from '../components/Layout';
import ImageList from '../components/ImageList';
import { useState, useEffect } from 'react';
import {useCookies} from 'react-cookie'


function AllImages() {
  const[images, setImages] = useState([])
  const [token] = useCookies(['mytoken'])
  const [searchValue, setSearchValue] = useState('')



  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/images', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f'
        // 'Authorization': `Token ${token['mytoken']}`
      }

    })
    .then(resp => resp.json())
    .then(resp => setImages(resp))
    .catch(error => console.log(error))
  }, [])


  const searchImages = () => {
    let searchedImages = []
    console.log(searchValue)
    {images.map(image => {
      if(image.title.toString().toLowerCase().includes(searchValue.toLowerCase()) || image.description.toString().toLowerCase().includes(searchValue.toLowerCase())){
        searchedImages.push(image)
      }
      })}
    setImages(searchedImages)
  }
  

  return (
    <Layout>
      <div className='page'>
        <input type = "text" 
          className='form-control' 
          id="search" 
          placeholder='Search' 
          value = {searchValue} 
          onChange = {e => setSearchValue(e.target.value)} 
          required>
        </input>
        <button onClick = {searchImages} 
          className='btn btn-success update_image_button'>
            Search
        </button>
        <button onClick = {searchImages} 
          className='btn btn-danger update_image_button'>
            Cancel
        </button>
        <ImageList images = {images}></ImageList>
      </div>      
    </Layout>
  )
}

export default AllImages
