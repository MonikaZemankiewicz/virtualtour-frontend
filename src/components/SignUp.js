
import React, { useState } from "react"
import {useCookies} from 'react-cookie'
import { useHistory } from "react-router-dom"
import APIService from "../APIService"
import axios from "axios"




export default function (props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  

  const registerBtn = () => {
    let form_data = new FormData();
    form_data.append('username', username);
    form_data.append('password', password);
    let url = 'https://monikazemankiewicz.pythonanywhere.com/api/users/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f' 

      }
    }).then(res => {
        props.displayAlert("User Registered")
        console.log(res.data);
      })
      .catch(err => {
        props.displayAlert("User with that username already exists")
        console.log(err)
      })

    // APIService.RegisterUser({username, password})
    // .then(resp => {
    //   props.displayAlert("User Registered")
    //   console.log(resp)
    // })
    // .catch(error => {
    //   //props.displayAlert('User with that username already exists')
    //   console.log(error)
    // })
  }

  return (
    <div>
      <div className="form-group mt-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="e.g JaneDoe"
          value = {username}
          onChange = {e => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control mt-1"
          placeholder="Password"
          value = {password}
          onChange = {e => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary"  onClick = {registerBtn}>
          Register
        </button>
      </div>
      <p className="text-center mt-2">
        {errorMessage}
      </p>
    </div>
  )
}
