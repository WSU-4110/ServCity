import React, {useState} from 'react';
import './Forum.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ForumHome from './ForumPages/ForumHome';
import CreatePost from './pages/CreatePost';
//import Login from './pages/Login';
function ForumPage() {
  //determine if user is logged in or not
 // const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <nav>
        <Link to= "/"> Home </Link>
        <Link to= "/createpost"> Create Post </Link>
        {/* <Link to= "/login"> Login </Link> */}
      </nav>
      <Routes>
        <Route path ="/" element={<ForumHome />} />
        <Route path ="/createpost" element={<CreatePost />} />
        {/* <Route path ="/login" element={<Login setIsAuth= {setIsAuth}/>} /> */}
      </Routes>
    </Router>
  );
}

export default ForumPage;
