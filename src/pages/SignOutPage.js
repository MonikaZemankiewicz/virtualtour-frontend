import React from 'react'
import { useEffect } from "react"
import {useCookies} from 'react-cookie'
import { useHistory } from "react-router-dom"

function SignOutPage() {
    const [token, setToken, removeToken] = useCookies(['mytoken'])
    let history = useHistory()


    useEffect(() => {
        if(!token['mytoken']){
          history.push('/')
        }
      }, [token])

    const logoutBtn = () => {
        removeToken('mytoken',{path:'/'});
      }
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Are you sure that you want to log out?</h3>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" onClick = {logoutBtn}>
                  Log Out
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

export default SignOutPage
