import React from 'react'
import Layout from '../components/Layout';
import SignIn from '../components/SignIn';
import { useState, useEffect } from 'react';
import SignUp from '../components/SignUp';
import APIService from '../APIService';



function SignInPage() {
  const [authMode, setAuthMode] = useState("signin")
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  if (authMode === "signin") {
    return (
      <Layout>
        <SignIn changeAuthMode = {changeAuthMode}></SignIn>
      </Layout>
    )
  }
  else {
    return (
      <Layout>
        <SignUp changeAuthMode = {changeAuthMode}></SignUp>
      </Layout>
    )
  }
}

export default SignInPage
