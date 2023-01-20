import React from 'react'
import Layout from '../components/Layout'
import {useCookies} from 'react-cookie'
import { useHistory } from "react-router-dom"
import { useState, useEffect } from 'react'
import ImageList from '../components/ImageList'
import EditImageForm from '../components/EditImageForm'

function ProfilePage() {
    const[images, setImages] = useState([])
    const[videos, setVideos] = useState([])
    const[editImage, setEditImage] = useState(null)
    const[editVideo, setEditVideo] = useState(null)
    const [token] = useCookies(['mytoken'])
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/images', {
        'method': 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token['mytoken']}`
          // 'Authorization': `Token ${token['mytoken']}`
        }
  
      })
      .then(resp => resp.json())
      .then((resp) => {
        let ownerImages = []
        {resp.map(image => {
            if(image.owner == token['mytoken']){
                console.log(image.owner)
                console.log(token['mytoken'])
                ownerImages.push(image)
            }
          })}
        setImages(ownerImages)
        })
      .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/videos', {
          'method': 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token c204df1a90a533ee2ec008d591fc50c3c2bd7961'
            // 'Authorization': `Token ${token['mytoken']}`
          }
    
        })
        .then(resp => resp.json())
        .then(resp => setVideos(resp))
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

export default ProfilePage
