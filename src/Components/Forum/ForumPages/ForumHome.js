import React, { useEffect, useState } from "react";
import { getDocs, deleteDoc, doc, collection } from "firebase/firestore";
import { db } from "../firebase";
// import ReplyPost from "../ReplyToPosts/ReplyPost";
// const current = new Date();
export default function Home() {
  //array of posts existing in database - call to firebase
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
 
  //retrieve data from database - postCollectioonRef
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  //method to delete posts
  const deletePost = async (id)=> {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc)
  }

  return (
    <div className="homePage">
        {/* //post variable has id for list doc */}
      {postLists.map((post) => {
        return (
          <div className="post">

            <div className="postHeader">

            
            </div>
            <div className="postHeader">
              <div className="title">
                {" "}
                <h1>{post.title}</h1>
              </div>
             </div>
            <div className="postTextContainer">{post.postText}</div>
            <div className="userName">
                {" "}
                <h3>@{post.userName}</h3>
              </div>
             
          </div>
        );
      })}

      <div> </div>
    </div>
  );
}
