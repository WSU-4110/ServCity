import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./map.css";
import { Getuserslocation } from "../../API/Api";
export default function Map({ placeLocation }) {
  const [center, setCenter] = useState({});
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEAPIKEY,
  });

  useEffect(() => {
    Getuserslocation().then((results) => {
      setCenter({
        lat: results.coordinates.lat,
        lng: results.coordinates.lng,
      });
    });
  }, []);
  // console.log(location.lat);

  if (!isLoaded) return <div>Loading...</div>;
  return <MapLoaded center={center} Location={placeLocation} />;
}

function MapLoaded({ center, Location }) {
  console.log(center, Location);
  const position = {
    lat: Location.lat,
    lng: Location.lng,
  };
  return (
    <>
      {Object.keys(center).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <GoogleMap
          zoom={13}
          center={{
            lat: parseFloat(position.lat),
            lng: parseFloat(position.lng),
          }}
          mapContainerClassName="map-container"
        >
          {" "}
          <Marker position={position} />
        </GoogleMap>
      )}
    </>
  );
}
