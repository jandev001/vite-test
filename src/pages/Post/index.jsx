import React from 'react'
import { useRecoilStateLoadable } from 'recoil'

import { postQuery } from '../../recoil/selectors'
import { useParams } from 'react-router-dom'

export const Post = () => {
    const param = useParams()
    const [post] = useRecoilStateLoadable(postQuery(param.id))

    if (post.state === 'hasError') {
        return <div className='text-white'>There is some problem!</div>
      }
    
      if (post.state === 'loading') {
        return <div className='text-white'>Loading ...</div>
      }
    
      if (post.state === 'hasValue') {
          return (
              <div className='text-white'>
                <p>{`Post ID: ${post.contents.id}`}</p>
                <p>{`Post Title: ${post.contents.title}`}</p>
                <p>{`Post Body: ${post.contents.body}`}</p>
              </div>
          )
      }
}