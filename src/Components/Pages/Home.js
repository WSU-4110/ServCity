/** import { Home } from "@mui/icons-material";**/
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/material";
import { Link } from "react-router-dom";
import TopSection from "../TopSection";
import Cards from "../Cards";
import Footer from "../Footer";
import LoginHandler from "../Login/LoginMain";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

/** const useStyles = makeStyles(theme => ({
    root: {
        display:'flex',
    }
})); **/

function HomePage() {
  const [modal, setOpenModal] = useState(true);
  const toggleModal = () => {
    setOpenModal(!modal);
  };

  return (
    <>
      <TopSection />
      <Cards />

      {modal === true ? (
        <div className="ModalContainer">
          <div onClick={toggleModal} className="Modaloverlay"></div>
          <div className="Modalcontent">
            <LoginHandler />
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default HomePage;
