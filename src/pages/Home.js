import React from 'react'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import {useCookies} from 'react-cookie'
import MediaList from '../components/MediaList'

function Home() {
  const[images, setImages] = useState([])
  const[videos, setVideos] = useState([])
  const[virtualTours, setVirtualTours] = useState([])
  const [token] = useCookies(['mytoken'])

  useEffect(() => {
    fetch('https://monikazemankiewicz.pythonanywhere.com/api/images', {
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

    fetch('https://monikazemankiewicz.pythonanywhere.com/api/videos', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f'
      }
    })
    .then(resp => resp.json())
    .then((resp) => {
      let displayVideos = []
      {resp.slice(0,3).map(video => {
          displayVideos.push(video)
        })}
      setVideos(displayVideos)
      })
    .catch(error => console.log(error))

     fetch('https://monikazemankiewicz.pythonanywhere.com/api/virtualtours', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f'
      }
    })
    .then(resp => resp.json())
    .then((resp) => {
      let displayVirtualTours = []
      {resp.slice(0,3).map(virtualtours => {
        displayVirtualTours.push(virtualtours)
        })}
        setVirtualTours(displayVirtualTours)
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
        <MediaList type = 'images' media = {images}></MediaList>
        <div className='see_more_button_div'>
          <a href="/images">    
            <button type="button" className="btn btn-lg see_more_button">
              See more
            </button>
          </a>  
        </div>
        <h1 className='profile_heading'>360 Videos</h1>  
        <hr className='profile_heading_line'></hr>
        <MediaList type = 'videos' media = {videos}></MediaList>
        <div className='see_more_button_div'>
          <a href="/videos">    
            <button type="button" className="btn btn-lg see_more_button">
              See more
            </button>
          </a>  
        </div>
        <h1 className='profile_heading'>360 Virtual Tours</h1>  
        <hr className='profile_heading_line'></hr>
        <MediaList type = 'virtualtours' media = {virtualTours}></MediaList>
        <div className='see_more_button_div'>
          <a href="/virtualtours">    
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
