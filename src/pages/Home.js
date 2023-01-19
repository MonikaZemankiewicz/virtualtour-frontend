import React from 'react'
import Layout from '../components/Layout'
import ImageUploadForm from '../components/ImageUploadForm'

function Home() {
  return (
    <Layout>
      <div className='page'>
        <ImageUploadForm/>
      </div>
        
    </Layout>
  )
}

export default Home
