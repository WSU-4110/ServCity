import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Listcontainer } from "./Liststyles";
import Slider from "react-slick";
import Maps from "../Map/maps";
import "./modal.css";

const List = ({ result }) => {
  const [modal, setOpenModal] = useState(false);
  const [location, SetLocation] = useState({});
  const toggleModal = () => {
    setOpenModal(!modal);
  };
  console.log(modal);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "250px",
  };

  return (
    <>
      <Listcontainer>
        <Slider {...settings}>
          {result?.map((places, i) => (
            <Grid key={i} sx={{ flexGrow: 1 }}>
              <PlaceDetails {...{ places, setOpenModal, SetLocation }} />
            </Grid>
          ))}
        </Slider>
      </Listcontainer>

      {modal === true ? (
        <div className="ModalContainer">
          <div onClick={toggleModal} className="Modaloverlay"></div>
          <div className="Modalcontent">
            <Maps placeLocation={location} />
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default List;
