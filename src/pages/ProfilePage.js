import React from 'react'
import Layout from '../components/Layout'
import {useCookies} from 'react-cookie'
import { useHistory } from "react-router-dom"
import { useState, useEffect } from 'react'
import EditableImageList from '../components/images/EditableImageList'
import EditImageForm from '../components/images/EditImageForm'
import EditableVideoList from '../components/videos/EditableVideoList'
import EditableVirtualTourList from '../components/virtualtours/EditableVirtualTourList'
import EditVideoForm from '../components/videos/EditVideoForm'
import EditVirtualTourForm from '../components/virtualtours/EditVirtualTourForm'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import profileicon from '../images/profile-icon.png'
import ImageUploadForm from '../components/images/ImageUploadForm'
import VideoUploadForm from '../components/videos/VideoUploadForm';
import VirtualTourUploadForm from '../components/virtualtours/VirtualTourUploadForm';


function ProfilePage() {
    const[images, setImages] = useState([])
    const[videos, setVideos] = useState([])
    const[virtualtours, setVirtualTours] = useState([])
    const[editImage, setEditImage] = useState(null)
    const[editVideo, setEditVideo] = useState(null)
    const[editVirtualTour, setEditVirtualTour] = useState(null)
    const [token] = useCookies(['mytoken'])
  
    //  Fetch Owner Images
    useEffect(() => {
      fetch('https://monikazemankiewicz.pythonanywhere.com/api/images', {
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
            if(image.owner == localStorage.getItem("username")){
                ownerImages.push(image)
            }
          })}
        setImages(ownerImages)
        })
      .catch(error => console.log(error))
    }, [])

    //  Fetch Owner Videos
    useEffect(() => {
      fetch('https://monikazemankiewicz.pythonanywhere.com/api/videos', {
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
            if(video.owner == localStorage.getItem("username")){
                ownerVideos.push(video)
            }
          })}
        setVideos(ownerVideos)
        })
      .catch(error => console.log(error))
    }, [])

    //  Fetch Owner Virtual Tours
    useEffect(() => {
      fetch('https://monikazemankiewicz.pythonanywhere.com/api/virtualtours', {
        'method': 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token['mytoken']}`
        }
  
      })
      .then(resp => resp.json())
      .then((resp) => {
        let ownerVirtualTours = []
        {resp.map(virtualtour => {
            if(virtualtour.owner == localStorage.getItem("username")){
                ownerVirtualTours.push(virtualtour)
            }
          })}
        setVirtualTours(ownerVirtualTours)
        })
      .catch(error => console.log(error))
    }, [])
  
    const editImageBtn = (image) => {
      setEditImage(image)
      setEditVideo(null)
      setEditVirtualTour(null)
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
      setEditVirtualTour(null)
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
  
    const deleteVideoBtn = (video) => {
      const new_videos = videos.filter(myvideo => {
        if(myvideo.id === video.id) {
          return false
        }
        return true;
      })
  
      setVideos(new_videos)
    }

    const editVirtualTourBtn = (virtualtour) => {
      setEditVirtualTour(virtualtour)
      setEditImage(null)
      setEditVideo(null)
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
  
    const deleteVirtualTourBtn = (virtualtour) => {
      const new_virtualtours = virtualtours.filter(myvirtualtour => {
        if(myvirtualtour.id === virtualtour.id) {
          return false
        }
        return true;
      })
  
      setVirtualTours(new_virtualtours)
    }

    const closeForm = () => {
      setEditImage(null)
      setEditVideo(null)
      setEditVirtualTour(null)
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

    const updatedInformationVirtualTours = (virtualtour) => {
      const new_virtualtour = virtualtours.map(current_virtualtour => {
        if(current_virtualtour.id === virtualtour.id) {
          return virtualtour;
        }
        else {
          return current_virtualtour;
        }
      })
  
      setVirtualTours(new_virtualtour)
    }
    
    
  
    return (
      <Layout>
        <div className='page'>
          <div className = "username_div">
            <img className = "profile_page_icon" src = {profileicon}></img>    
            <h2 className='username'>{localStorage.getItem("username").toLocaleUpperCase()}</h2>  
          </div>
          <hr className='profile_heading_line'></hr>
          <h1 className='profile_heading'>My content</h1>  
          <hr className='profile_heading_line'></hr>
          <Tabs>
              <TabList>
                <Tab>Images</Tab>
                <Tab>Videos</Tab>
                <Tab>Virtual Tours</Tab>
              </TabList>
              <TabPanel>
                {editImage ? 
                    <EditImageForm image = {editImage} updatedInformation = {updatedInformationImages} closeForm = {closeForm}></EditImageForm>
                    : null
                }
                <EditableImageList images = {images} editBtn = {editImageBtn} deleteBtn={deleteImageBtn}></EditableImageList>
              </TabPanel>
              <TabPanel>
                {editVideo ? 
                    <EditVideoForm video = {editVideo} updatedInformation = {updatedInformationVideos} closeForm = {closeForm}></EditVideoForm>
                    : null
                }
                <EditableVideoList videos = {videos} editBtn = {editVideoBtn} deleteBtn={deleteVideoBtn}></EditableVideoList>
              </TabPanel>
              <TabPanel>
                {editVirtualTour ? 
                    <EditVirtualTourForm virtualtour = {editVirtualTour} updatedInformation = {updatedInformationVirtualTours} closeForm = {closeForm}></EditVirtualTourForm>
                    : null
                }
                <EditableVirtualTourList virtualtours = {virtualtours} editBtn = {editVirtualTourBtn} deleteBtn={deleteVirtualTourBtn}></EditableVirtualTourList>
              </TabPanel>
            </Tabs>  
          <h1 className='profile_heading'>Upload</h1>  
          <hr className='profile_heading_line'></hr>
          <Tabs>
            <TabList>
              <Tab>Image</Tab>
              <Tab>Video</Tab>
              <Tab>Virtual Tour</Tab>
            </TabList> 
            <TabPanel>
              <ImageUploadForm/>
            </TabPanel>
            <TabPanel>
              <VideoUploadForm/>
            </TabPanel>
            <TabPanel>
              <VirtualTourUploadForm/>
            </TabPanel>
          </Tabs>           
        </div>       
      </Layout>
    )
}

export default ProfilePage
