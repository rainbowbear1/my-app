import React, { useState } from 'react'

export default function Post(props) {
  let refer = React.createRef()
  function change(){
    refer.current.style.color = "green"
    refer.current.style.fontSize = "50px"
  }
  function revert(){
    refer.current.style.color = "black"
    refer.current.style.fontSize = "32px"
  }
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  function like(){
    setLikes(likes + 1)
  }
  function dislike(){
    setDislikes(dislikes + 1)
  }


  return (
      <div class="bigbox">
        <h1 ref={refer} onMouseEnter={change} onMouseLeave={revert}>{props.postTitle}</h1>
        <p>{props.text}</p>
        <p>Likes: {likes}</p>
        <p>Dislikes: {dislikes}</p>
        <button className='like-btn' onClick={like}>Like</button>
        <button className='dislike-btn' onClick={dislike}>Dislike</button>
        <button className='del-btn' onClick={()=> props.deletePost(props.id)}>Delete Post</button>
      </div>
  )
}
