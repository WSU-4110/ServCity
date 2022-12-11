//
//AtHome Table

import React, { useEffect, useState } from "react";
import "../AtHome/css/AtHomeTablePopUp.css";
import ReactPlayer from "react-player";

export default function Table({ results }) {
  const [partNum, SetPartNum] = useState("");
  const [ProductLink, SetProductLink] = useState("");
  const [ProductVideo, SetProductVideo] = useState("");
  const [modal, setOpenModal] = useState(true);
  const toggleModal = () => {
    setOpenModal(!modal);
  };
  console.log(results);
  useEffect(() => {
    for (var i = 0; i < results.length; i++) {
      SetPartNum(results[i].PartNum);
      SetProductLink(results[i].ProductLink);
      SetProductVideo(results[i].ProductVideo);
    }
  }, []);
  return (
    <>
      {modal === true ? (
        <div className="AtHomeTablePopUpContainer">
          <div onClick={toggleModal} className="AtHomeTablePopUpoverlay"></div>
          <div className="AtHomeTablePopUpcontent">
            <div>
              {partNum != null ? (
                <>
                  <h2>Part Number</h2>
                  <p> Number: {partNum}</p>
                </>
              ) : null}
              {ProductLink != null ? (
                <>
                  <h2>Product Link</h2>
                  <a href={`${ProductLink}`}> Link</a>
                </>
              ) : null}
              {ProductVideo != null ? (
                <>
                  <h2>Product Video</h2>
                  <ReactPlayer
                    url={`${ProductVideo}`}
                    width={500}
                    height={200}
                  />
                </>
              ) : null}
            </div>
            <button className="AtHomeTablePopUp-close" onClick={toggleModal}>
              x
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
