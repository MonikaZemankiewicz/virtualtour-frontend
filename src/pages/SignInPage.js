import React from 'react'
import Layout from '../components/Layout';
import SignIn from '../components/SignIn';
import { useState, useEffect } from 'react';



function AllVideos() {
  return (
    <Layout>
      <div className='page'>
      <SignIn></SignIn>
      </div>
    </Layout>
  )
}

export default AllVideos
