import './App.css';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';

function App() {

  

  return (
    <div className="App">
      <Layout>
      <script src="https://360player.io/static/dist/scripts/embed.js" defer></script>
            <iframe src="https://360player.io/p/k6f7rb/" frameborder="0" width="560" height="315"
                allow="fullscreen; xr-spatial-tracking" data-token="k6f7rb"></iframe>
      </Layout>
      
    </div>
  );
}

export default App;
