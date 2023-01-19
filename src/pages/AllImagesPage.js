import React from 'react'
import Layout from '../components/Layout';
import ImageList from '../components/ImageList';
import { useState, useEffect } from 'react';
import EditImageForm from '../components/EditImageForm'


function AllImages() {
  const[images, setImages] = useState([])
  const[editImage, setEditImage] = useState(null)
  const[deleteImage, setDeleteImage] = useState(null)


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/images', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f'
      }

    })
    .then(resp => resp.json())
    .then(resp => setImages(resp))
    .catch(error => console.log(error))
  }, [])

  const editBtn = (image) => {
    setEditImage(image)
  }


  const updatedInformation = (image) => {
    const new_image = images.map(current_image => {
      if(current_image.id === image.id) {
        return image;
      }
      else {
        return current_image;
      }
    })

    setImages(new_image)
  }
  

  return (
    <Layout>
      <div className='page'>
        <ImageList images = {images} editBtn = {editBtn}></ImageList>
        {editImage ? 
              <EditImageForm image = {editImage} updatedInformation = {updatedInformation}></EditImageForm>
              : null
        }
      </div>
        
    </Layout>
  )
}

export default AllImages
