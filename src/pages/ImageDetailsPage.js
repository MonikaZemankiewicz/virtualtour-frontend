import React from 'react'
import Layout from '../components/Layout';
import ImageList from '../components/ImageList';
import { useState, useEffect } from 'react';
import ImageDetails from '../components/ImageDetails';
import { useParams } from "react-router-dom";

function AllImages() {
  const { id } = useParams()
  const url = 'http://127.0.0.1:8000/api/images/'

  const[image, setImage] = useState([])

  useEffect(() => {
    fetch(url.concat(id), {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f'
      }

    })
    .then(resp => resp.json())
    .then(resp => setImage(resp))
    .catch(error => console.log(error))
  }, [])
    
  return (
    <Layout>
      <div className='page'>
        <ImageDetails image = {image}></ImageDetails>
      </div>
    </Layout>
  )
}

export default AllImages
