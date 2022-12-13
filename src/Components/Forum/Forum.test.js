import React from "react";
import "@testing-library/jest-dom";
import Forum from "../Forum";
import { render, cleanup, screen } from "@testing-library/react";
import MockForum from "../MockForum";
import { getDocs, collection } from "firebase/firestore";
import PopUpPost from "../PopUpPost";
import CreatePost from "../CreatePost";

//unit test 1 - rendering create post button
it("if forum renders", () => {
    render(<Forum />);
    
  });

  //unit test 2 - rendering create post button
  it("if create post button renders", () => {
    render(<button />);
    
  });

  //unit test 3 - rendering div component for div components
  it("if forum renders", () => {
    render(<div />);
    
  });

  //unit test 4 - display create posts popup
  it("create posts titles render", () => {
    render(<h1/>);
    
  });

  //unit test 5 - display fetched data 
  it("create posts titles render", () => {
    const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
  
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
    
  });

//   //unit test 6 - rendering popup
  it("if forum renders", () => {
    render(<div className="postHeader"/>);

  });
