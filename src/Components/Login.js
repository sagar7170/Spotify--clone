import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
  return (
    <div className='login'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Spotify_logo_horizontal_black.jpg/1200px-Spotify_logo_horizontal_black.jpg?20130609154558" alt="" />
        <a href={loginUrl}>Login to spotify</a>
    </div>
  )
}

export default Login