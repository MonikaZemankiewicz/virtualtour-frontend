import React from 'react'
import Layout from '../components/Layout'
import ImageUploadForm from '../components/images/ImageUploadForm'
import VideoUploadForm from '../components/videos/VideoUploadForm';
import VirtualTourUploadForm from '../components/virtualtours/VirtualTourUploadForm';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



function UploadImagePage() {
  return (
    <Layout>
      <div className='page'>
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

export default UploadImagePage
