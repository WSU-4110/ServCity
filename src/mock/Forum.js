import { getDocs, collection } from "firebase/firestore";
import { db } from "../Components/Pages/Forum/Firebase";
import { useState } from "react";

// import "reactjs-popup/dist/index.css";
// import "./Forum.css";
import PopupPost from "../Components/Pages/Forum/PopUpPost";

export default function Forum() {
  //array of posts existing in database - call to firebase
  const [postLists, setPostList] = useState([]);
  //   const postsCollectionRef = collection(db, "posts");

  //retrieve data from database - postCollectioonRef
  //   useEffect(() => {
  //     const getPosts = async () => {
  //       const data = await getDocs(postsCollectionRef);

  //       setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     };

  //     getPosts();
  //   });

  //control popup
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="homePage">
      {/* //post variable has id for list doc */}

      {postLists.map((post) => {
        return (
          <>
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
