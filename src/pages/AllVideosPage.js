import React from 'react'
import Layout from '../components/Layout';
import VideoList from '../components/VideoList';
import { useState, useEffect } from 'react';




function AllVideos() {
  const[videos, setVideos] = useState([])
  const[editVideo, setEditVideo] = useState(null)


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/videos', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f'
      }

    })
    .then(resp => resp.json())
    .then(resp => setVideos(resp))
    .catch(error => console.log(error))
  }, [])

  const editBtn = (video) => {
    setEditVideo(video)
  }

  return (
    <Layout>
        <VideoList videos = {videos} editBtn = {editBtn}></VideoList>
        {/* <Form video = {editVideo}/> */}
    </Layout>
  )
}

export default AllVideos
