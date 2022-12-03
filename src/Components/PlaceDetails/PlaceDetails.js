import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import { Chip, Rating } from "@mui/material";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import TiresPic from "../../Images/Service.png";

const PlaceDetails = ({ places, setOpenModal, SetLocation }) => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          height: "300px",
          Width: "250px",
          margin: "10px",
          color: "white",
          background:
            "linear-gradient(90deg, rgba(8,36,93,1) 0%, rgba(102,0,99,1) 100%);",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography level="h2" fontSize="md" sx={{ alignSelf: "flex-start" }}>
            {places.name}
          </Typography>
          <Typography level="body2">{places.formatted_address}</Typography>
        </Box>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
        >
          {places.recommend === "yes" ? (
            <Chip color="primary" label="Recommended" />
          ) : null}
        </IconButton>

        <AspectRatio minHeight="120px" maxHeight="180px" sx={{ my: 2 }}>
          <img src={TiresPic} height="150px" alt="" />
        </AspectRatio>

        <Box sx={{ display: "flex" }}>
          <Chip color="primary" label="Rating" />
          <Rating value={places.rating} precision={0.5} readOnly />
          <Button
            variant="solid"
            size="sm"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{
              ml: "auto",
              fontWeight: 600,
              background: "rgb(0, 126, 203)",
            }}
            onClick={() => {
              setOpenModal(true);
              SetLocation({ lat: places.lat, lng: places.lng });
            }}
          >
            Show in Map
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default PlaceDetails;
