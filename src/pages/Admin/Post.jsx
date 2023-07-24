import React from 'react'
import { Editor } from './editor.jsx'
import { getToken } from '../helpers/components/Token.jsx'
import Auth from './Auth.jsx'

const Post = () => {
   const token = getToken()
   if(!token) {
     return <Auth />
   }
   return (
      <>
         <Editor />
      </>
   )
}

export default Post