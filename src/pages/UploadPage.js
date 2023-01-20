import React from 'react'
import Layout from '../components/Layout'
import ImageUploadForm from '../components/ImageUploadForm'
import VideoUploadForm from '../components/VideoUploadForm';
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
            </TabList>
            <TabPanel>
              <ImageUploadForm/>
            </TabPanel>
            <TabPanel>
              <VideoUploadForm/>
            </TabPanel>
          </Tabs> 
      </div>
    </Layout>
  )
}

export default UploadImagePage