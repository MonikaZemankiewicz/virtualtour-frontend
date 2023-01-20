
import React, { useEffect, useState } from "react"
import APIService from "../APIService"
import {useCookies} from 'react-cookie'
import { useHistory } from "react-router-dom"
import axios from 'axios';

function SignIn(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let history = useHistory()

  useEffect(() => {
    if(token['mytoken']){
      history.push('/')
    }
  }, [token])

  const loginBtn = () => {
    APIService.LoginUser({username, password})
    .then((resp) => {
      setToken('mytoken', resp.token)
    })
    .catch(error => console.log(error))

  }

    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={props.changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter username"
                value = {username}
                onChange = {e => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value = {password}
                onChange = {e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick = {loginBtn}>
                Log In
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
}

export default SignIn

