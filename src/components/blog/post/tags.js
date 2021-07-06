import React from 'react'

const PostTags = ({tags}) => {  
  return (
    <p>
      Tags: {
        tags.map(function(tag){
          return tag.name;
      }).join(', ')
      }
    </p>
  )
}

export default PostTags