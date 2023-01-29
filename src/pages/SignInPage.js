import React from 'react'
import Layout from '../components/Layout';
import SignIn from '../components/SignIn';
import { useState } from 'react';
import SignUp from '../components/SignUp';
import {useCookies} from 'react-cookie'




function SignInPage() {
  const [authMode, setAuthMode] = useState("signin")
  const [token, setToken] = useCookies(['mytoken'])

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const displayAlert = (message) => {
    alert(message)

  }

  if(token['mytoken']){
      return(
        <Layout>
           <div className="Auth-form-container">
            <form className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Login successful</h3>
                <p>Now you can upload images, videos, and virtual tours, or open your user profile to edit/delete existing ones</p>
              </div>
            </form>
          </div>
        </Layout>
      ) 
  }
  else if (authMode === "signin") {
    return (
      <Layout>
        <div className="Auth-form-container">
        <form className="Auth-form" >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <SignIn displayAlert = {displayAlert}></SignIn> 
          </div>
        </form>
      </div>
      </Layout>
    )
  }
  else {
    return (
      <Layout>
        <div className="Auth-form-container">
        <form className="Auth-form" >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <SignUp displayAlert = {displayAlert}></SignUp> 
          </div>
        </form>
      </div>
      </Layout>
    )
  }
}

export default SignInPage
