import React from 'react'
import Layout from '../components/Layout'
import ImageUploadForm from '../components/ImageUploadForm'
import ImageList from '../components/ImageList'
import VideoList from '../components/VideoList'
import { useState, useEffect } from 'react'
import {useCookies} from 'react-cookie'
import { Link } from 'react-router-dom';


function Home() {
  const[images, setImages] = useState([])
  const[videos, setVideos] = useState([])
  const [token] = useCookies(['mytoken'])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/images', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f'
      }
    })
    .then(resp => resp.json())
    .then((resp) => {
      let displayImages = []
      {resp.slice(0, 3).map(image => {
        displayImages.push(image)
      })}
      setImages(displayImages)
      })
    .catch(error => console.log(error))
  }, [])
  

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/videos', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f'
      }
    })
    .then(resp => resp.json())
    .then((resp) => {
      let ownerVideos = []
      {resp.slice(0,3).map(video => {
          ownerVideos.push(video)
        })}
      setVideos(ownerVideos)
      })
    .catch(error => console.log(error))
  }, [])

  return (
    <Layout>
      <div className='page'>
        <div className="welcome_text_div">
        <h1>Welcome to the 360 Media website, your one-stop destination for all your media needs! </h1>
        <h2>Scroll through free 360 images, videos and virtual tours or log in to upload your own. </h2>
        </div>
        <h1 className='profile_heading'>360 Images</h1>  
        <hr className='profile_heading_line'></hr>
        <ImageList images = {images}></ImageList>
        <div className='see_more_button_div'>
          <a href="/images">    
            <button type="button" className="btn btn-lg see_more_button">
              See more
            </button>
          </a>  
        </div>
        <h1 className='profile_heading'>360 Videos</h1>  
        <hr className='profile_heading_line'></hr>
        <VideoList videos = {videos}></VideoList>
        <div className='see_more_button_div'>
          <a href="/videos">    
            <button type="button" className="btn btn-lg see_more_button">
              See more
            </button>
          </a>  
        </div>
      </div>
        
    </Layout>
  )
}

export default Home
