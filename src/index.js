import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, BrowserRouter } from 'react-router-dom';
import Form from './components/Form';
import Layout from './components/Layout';
import AllVideosPage from './pages/AllVideosPage';
import SignInPage from './pages/SignInPage';

function Router() {
  return(
    <BrowserRouter>

      <Route path = '/' exact component = {App}/>
      <Route path = '/login' exact component = {SignInPage}/>
      <Route path = '/videos' exact component = {AllVideosPage}/>

    </BrowserRouter>
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
