import mystyles from "styled-components";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Listcontainer = mystyles.div`
  margin-left: 5%;
  margin-right: 5%;
`;
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "#1A2027"),
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  textAlign: "left",
  borderRadius: 0.5,
  color: theme.palette.text.primary,
}));
