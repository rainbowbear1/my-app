import React, { useState } from 'react'
import Post from './Post'

export default function Posts(props) {

  let postData = props.posts
  
  const [posts_data, setPosts] = useState(postData)
  const [text, setText] = useState("")
  const [postTitle, setTitle] = useState("")

  const addNewPost = () => {
    const newPost ={
      id: Date.now(),
      text,
      postTitle
    }
    setPosts([...posts_data, newPost])
    setText("")
    setTitle("")
  }

  const deletePost = (post_id) => {
    setPosts(posts_data.filter(p => p.id != post_id))
  }

  let post_elements = posts_data.map(p => {
    return <Post id={p.id} postTitle={p.postTitle} text={p.text} deletePost={deletePost}/>
  })

  return (
    <div>
      <form action=''>
        <div className='form-post'>
          <p>Create your post:</p>
          <div className='form-input'>
            <input type='text' value={postTitle} onChange={e => setTitle(e.target.value)} placeholder='Post title' />
          </div>
          <div className='form-input'>
            <textarea type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Write something...'></textarea>
          </div>
          <button type="button" onClick={addNewPost}>Add</button>
        </div>
      </form>

      {post_elements}
      
    </div>
  )
}
