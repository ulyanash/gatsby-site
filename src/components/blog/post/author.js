import React from 'react'
import PostAuthorImage from './author-image';

const PostAuthor = ({author}) => {  
  if (!author) {
    return;
  }
console.log(author?.avatar, 'avatar')
  return (
    <div>
      <PostAuthorImage image={author?.avatar} alt={author.name} />
      <span>
        Author: {author.name}
      </span>
    </div>
  )
}

export default PostAuthor