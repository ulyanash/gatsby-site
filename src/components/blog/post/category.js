import React from 'react'

const PostCategory = ({category}) => {  
  return (
    category && 
    <span>
      Category: {category.name}
    </span>
  )
}

export default PostCategory