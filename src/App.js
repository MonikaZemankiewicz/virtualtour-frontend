import './App.css';
import { useState, useEffect } from 'react';
import VideoList from './components/VideoList';
import Layout from './components/Layout';

function App() {

  const[videos, setVideos] = useState([])

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

  return (
    <div className="App">
      <Layout>
      </Layout>
      
    </div>
  );
}

export default App;
