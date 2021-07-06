import React from 'react'

const PostBody = ({html}) => {
  return (
    <div
      className="post-body"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}

export default PostBody