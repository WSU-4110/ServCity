import React from 'react'
import CreatePost from './CreatePost';
import "./Forum.css";
export default function PopUpPost({closePopup}) {

//   //present a button on the home page of the forum for a user to post

  

  return (
    <div className='popupBg'>
     <div className='popupContainer'>
     <button on onClick={() => closePopup(false)} >X</button>
      <div className="popupContent">
        <CreatePost/>
      </div>
     </div>
    </div>
  )
}

