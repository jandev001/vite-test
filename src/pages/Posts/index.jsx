import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilStateLoadable } from 'recoil'

import { postListState } from '../../recoil/atoms'

export const Posts = () => {
  const [posts] = useRecoilStateLoadable(postListState)
  
  if (posts.state === 'hasError') {
    return <div className='text-white'>There is some problem!</div>
  }

  if (posts.state === 'loading') {
    return <div className='text-white'>Loading ...</div>
  }

  if (posts.state === 'hasValue') {
    return (
      <div>
        {posts.contents.map(post => (
          <Link to={`/posts/${post.id}`} key={post.id} className='flex text-white'>{post.title}</Link>
        ))}
      </div>
    )
  }
}