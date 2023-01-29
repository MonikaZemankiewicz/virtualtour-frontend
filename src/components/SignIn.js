
import React, { useEffect, useState } from "react"
import APIService from "../APIService"
import {useCookies} from 'react-cookie'
import { useHistory } from "react-router-dom"

function SignIn(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let history = useHistory()

  // useEffect(() => {
  //   if(token['mytoken']){
  //     history.push('/')
  //   }
  // }, [token])

  const loginBtn = (e) => {
   e.preventDefault();
    APIService.LoginUser({username, password})
    .then((resp) => {
      if(resp.token.toString() == 'undefined'){
        removeToken('mytoken',{path:'/'})
      } else {
        localStorage.setItem("username", username)
        setToken('mytoken', resp.token)
      }
    })
    .catch(error => {
      console.log(error)
      props.displayAlert("Wrong username or password")
    })
  }

  if(!token['mytoken']){
    return (
      <div>
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
            <button onClick={e => loginBtn(e)} className="btn btn-primary">
              Log In
            </button>
          </div>
      </div>
    )
  }
}


export default SignIn

