import React, { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
// import ReplyPost from '../ReplyToPosts/ReplyPost';
export default function CreatePost() {
  // keep track of user's title, name, input
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [postText, setPostText] = useState("");
//   const current = new Date();
  


  //reference to database
  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  //submit data into firestore
  const createPost = async () => {
    await addDoc(postsCollectionRef, { userName, title, postText});
    navigate("/");
  };
//if there is no text, user cannot submit post
  const isTextareaDisabled = postText.length === 0;

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        {/* //div for name of user posting */}
        <div className="inputGp">
          <label>Name:</label>
          {/* update state according to input */}
          <input
            placeholder="Name"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>

        {/* div for title of post */}
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        {/* div for actual post */}
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Post"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost} disabled = {isTextareaDisabled}>Submit Post</button>
      </div>

     
    </div>
  );
}
