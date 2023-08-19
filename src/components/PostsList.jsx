import React from 'react'
import NotFound from './NotFound'

function PostsList({postList}) {
  return (
        postList.length > 0 
        ?
        <div className='post-container'>
          {
            postList.map((post, index) => {
              return (
                <div className='postCard'>
                
                </div>
              )
            })
          }
        </div>
        :
        <NotFound type="post" />
  )
}

export default PostsList