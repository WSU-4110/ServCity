import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./Firebase";
// import "reactjs-popup/dist/index.css";
// import "./Forum.css";
import "../Forum/Forum.css";
import PopupPost from "./PopUpPost";
// import Footer from "../../Footer.js";
// import { Titleholder, Content, InsightsContainer } from "./BrakeStyles";
// import InsightsBreaks from "../../InsightsSections/InsightsBreaks";

//load posts created in the database into the home page of the forum
//allow user to click on popup button to create a post and display on same page
// import ReplyPost from "../ReplyToPosts/ReplyPost";
// const current = new Date();
export default function Forum() {
  //array of posts existing in database - call to firebase
  const [postLists, setPostList] = useState([]);
  // const postsCollectionRef = collection(db, "posts");

  // control popup
  const [openPopup, setOpenPopup] = useState(false);

  //retrieve data from database - postCollectioonRef
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const data = await getDocs(postsCollectionRef);

  //     setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getPosts();
  // });

  return (
    <div className="homePage">
      {/* //post variable has id for list doc */}

      {postLists.map((post) => {
        return (
          <>
            <div className="title">
              <h1>ServCity Forum</h1>
            </div>

            <div className="post">
              <div className="postHeader">
                <div className="title">
                  <h1>{[post.title]}</h1>
                </div>
              </div>
              <div className="postTextContainer">
                {[post.postText, post.userName]}
              </div>
              <div className="userName">
                <h3>@{post.userName}</h3>
              </div>
            </div>
          </>
        );
      })}
      <br></br>
      <div className="openPopup">
        <button
          className="openBtn"
          onClick={() => {
            setOpenPopup(true);
          }}
        >
          Create a Post
        </button>

        {openPopup && <PopupPost closePopup={setOpenPopup} />}
      </div>
      <br></br>
    </div>
  );
}
