import React from 'react'
import Layout from '../components/Layout';
import ImageList from '../components/ImageList';
import { useState, useEffect } from 'react';
import EditImageForm from '../components/EditImageForm'
import {useCookies} from 'react-cookie'


function AllImages() {
  const[images, setImages] = useState([])
  const[editImage, setEditImage] = useState(null)
  const [token] = useCookies(['mytoken'])



  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/images', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token['mytoken']}`
      }

    })
    .then(resp => resp.json())
    .then(resp => setImages(resp))
    .catch(error => console.log(error))
  }, [])

  const editBtn = (image) => {
    setEditImage(image)
  }

  const deleteBtn = (image) => {
    const new_images = images.filter(myimage => {
      if(myimage.id === image.id) {
        return false
      }
      return true;
    })

    setImages(new_images)
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
        <ImageList images = {images} editBtn = {editBtn} deleteBtn={deleteBtn}></ImageList>
        {editImage ? 
              <EditImageForm image = {editImage} updatedInformation = {updatedInformation}></EditImageForm>
              : null
        }
      </div>
        
    </Layout>
  )
}

export default AllImages
