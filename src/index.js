import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AllVideosPage from './pages/AllVideosPage';
import AllImagesPage from './pages/AllImagesPage';
import SignInPage from './pages/SignInPage';
import ImageDetailsPage from './pages/ImageDetailsPage';
import VideoDetailsPage from './pages/VideoDetailsPage';
import VirtualTourDetailsPage from './pages/VirtualTourDetailsPage';
import { CookiesProvider } from 'react-cookie';
import ProfilePage from './pages/ProfilePage';
import UploadPage from './pages/UploadPage';
import SignOutPage from './pages/SignOutPage';
import AllVirtualToursPage from './pages/AllVirtualToursPage';


function Router() {
  return(
    <CookiesProvider>
      <BrowserRouter>
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/login' exact component = {SignInPage}/>
          <Route path = '/logout' exact component = {SignOutPage}/>
          <Route path = '/videos' exact component = {AllVideosPage}/>
          <Route path = '/images' exact component = {AllImagesPage}/>
          <Route path = '/virtualtours' exact component = {AllVirtualToursPage}/>
          <Route path='/images/:id' component={ImageDetailsPage} />
          <Route path='/videos/:id' component={VideoDetailsPage} />
          <Route path='/virtualtours/:id' component={VirtualTourDetailsPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/upload' component={UploadPage} />
        </Switch>
      </BrowserRouter>
    </CookiesProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
