import React from 'react'
import Layout from '../components/Layout'
import {useCookies} from 'react-cookie'
import { useHistory } from "react-router-dom"
import { useState, useEffect } from 'react'
import EditableImageList from '../components/EditableImageList'
import EditImageForm from '../components/EditImageForm'
import EditableVideoList from '../components/EditableVideoList'
import EditVideoForm from '../components/EditVideoForm'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
          'Authorization': `Token ${token['mytoken']}`
        }
  
      })
      .then(resp => resp.json())
      .then((resp) => {
        let ownerVideos = []
        {resp.map(video => {
            if(video.owner == token['mytoken']){
                console.log(video.owner)
                console.log(token['mytoken'])
                ownerVideos.push(video)
            }
          })}
        setVideos(ownerVideos)
        })
      .catch(error => console.log(error))
    }, [])
  
    const editImageBtn = (image) => {
      setEditImage(image)
      setEditVideo(null)
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
  
    const deleteImageBtn = (image) => {
      const new_images = images.filter(myimage => {
        if(myimage.id === image.id) {
          return false
        }
        return true;
      })
  
      setImages(new_images)
    }

    const editVideoBtn = (video) => {
      setEditVideo(video)
      setEditImage(null)
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
  
    const deleteVideoBtn = (video) => {
      const new_videos = videos.filter(myvideo => {
        if(myvideo.id === video.id) {
          return false
        }
        return true;
      })
  
      setImages(new_videos)
    }

    const closeForm = () => {
      setEditImage(null)
      setEditVideo(null)
    }
  
  
    const updatedInformationImages = (image) => {
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

    const updatedInformationVideos = (video) => {
      const new_video = videos.map(current_video => {
        if(current_video.id === video.id) {
          return video;
        }
        else {
          return current_video;
        }
      })
  
      setVideos(new_video)
    }
    
  
    return (
      <Layout>
        <div className='page'>

              {editImage ? 
                  <EditImageForm image = {editImage} updatedInformation = {updatedInformationImages} closeForm = {closeForm}></EditImageForm>
                  : null
              }

              {editVideo ? 
                  <EditVideoForm video = {editVideo} updatedInformation = {updatedInformationVideos} closeForm = {closeForm}></EditVideoForm>
                  : null
              }
              <h1>My Images</h1>
              <EditableImageList images = {images} editBtn = {editImageBtn} deleteBtn={deleteImageBtn}></EditableImageList>
              <h1>My Videos</h1>
              <EditableVideoList videos = {videos} editBtn = {editVideoBtn} deleteBtn={deleteVideoBtn}></EditableVideoList>

        
          
        </div>
          
      </Layout>
    )
}

export default ProfilePage