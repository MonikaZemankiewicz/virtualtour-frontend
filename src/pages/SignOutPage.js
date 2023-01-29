import React from 'react'
import { useEffect } from "react"
import {useCookies} from 'react-cookie'
import { useHistory } from "react-router-dom"
import Layout from '../components/Layout'

function SignOutPage() {
    const [token, setToken, removeToken] = useCookies(['mytoken'])
    let history = useHistory()


    // useEffect(() => {
    //     if(!token['mytoken']){
    //       history.push('/')
    //     }
    //   }, [token])

    const logoutBtn = (e) => {
        // e.preventDefault()
        removeToken('mytoken',{path:'/'})
        history.push('/')
      }
      return (
        <Layout>
          <div className="Auth-form-container">
            <form className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Are you sure that you want to log out?</h3>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary" onClick = {e => logoutBtn(e)}>
                    Log Out
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Layout>

      )
}

export default SignOutPage
