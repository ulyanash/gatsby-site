import React from 'react'
import PostAuthor from './author'
import PostCategory from './category'
import PostTags from './tags'

const PostMeta = ({item}) => {
  return (
    <div>
      <p>
        {item.meta.publishedAt}
      </p>
      <PostCategory category={item.category} />
      <PostTags tags={item.tag} />
      <PostAuthor author={item.author} />
    </div>
  )
}

export default PostMeta