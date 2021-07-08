import React from 'react'

const PostCategory = ({category}) => {  
  return (
    category && 
    <span>
      {category.name}
    </span>
  )
}

export default PostCategory