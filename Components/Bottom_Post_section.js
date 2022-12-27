import React from 'react'
import { Like_icon } from '../lib/config'
import { Comment_icon } from '../lib/config'

const Bottom_Post_section = () => {
  return (
    <div className="bottom_post_section_content">
    <div className="like_section_post">
      <img src={ Like_icon } />
      <p>0</p>
    </div>
    <div className="comments_section_post">
      <img src={ Comment_icon } />
      <p>0</p>
    </div>
  </div>    
  )
}

export default Bottom_Post_section