import React from 'react'
import PostAuthorImage from './author-image';

const PostAuthor = ({author}) => {  
  if (!author) {
    return;
  }
console.log(author?.avatar, 'avatar')
  return (
    <p>
      <PostAuthorImage image={author?.avatar} alt={author.name} />
      <span>
        Author: {author.name}
      </span>
    </p>
  )
}

export default PostAuthor