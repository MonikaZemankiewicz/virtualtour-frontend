import React from 'react'
import Layout from '../components/Layout';
import ImageList from '../components/ImageList';
import { useState, useEffect } from 'react';




function AllImages() {
  const[images, setImages] = useState([])
  const[editImage, setEditImage] = useState(null)


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

  return (
    <Layout>
      <div className='page'>
        <ImageList images = {images} editBtn = {editBtn}></ImageList>
        {/* <Form video = {editVideo}/> */}
      </div>
        
    </Layout>
  )
}

export default AllImages
