import React, { useState, useEffect } from "react";
import Footer from "../../Footer";
import { Titleholder, Content, InsightsContainer } from "./ForumStyles";

export default function Forum() {
  const [result, setResult] = useState([]);

  let service = "Forum";


  return (
    <>
      <Content>
        <Titleholder>Forum</Titleholder>
      </Content>
    </>
  );
}
