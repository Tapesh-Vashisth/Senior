import React from 'react'
import NavBar from '../components/NavBar'
import CreateModal from '../components/CreateModal'
import '../styles/posts.css'
import CreatePostModal from '../components/CreatePostModal'

function Posts() {
  return (
    <div style = {{display: "flex", flexGrow: 1, flexDirection: "column", height: "100vh"}}>
      <NavBar className="navbar" type = "posts" />
      <div className='addPost_Modal'>
        <CreatePostModal />
      </div>
    </div>
  )
}

export default Posts