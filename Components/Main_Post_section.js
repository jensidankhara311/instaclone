import React from 'react'

const Main_Post_section = (props) => {
  const {data}= props
  return (
    <div>
      <div className="post_image_section_content">
        <img src={data?.links?.download} />
      </div>
    </div>
  )
}

export default Main_Post_section
