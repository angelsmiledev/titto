import React, { useEffect, useState } from "react";
import Icon1 from "../../images/hydrovactruck.png";
import Icon2 from "../../images/marineassetretrieval.png";
import Icon3 from "../../images/pipelineservices.jpeg";
import Icon4 from "../../images/firstaid.jpeg";
import Icon5 from "../../images/streetsweeper.png";
import Icon6 from "../../images/environmentaltruck.png";
import {
  PiecesContainer,
  PiecesH1,
  PiecesWrapper,
  PiecesCard,
  PiecesIcon,
} from "./PiecesElements";

const Pieces = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages([Icon1, Icon2, Icon3, Icon4, Icon5, Icon6]);
  }, []);
  return (
    <PiecesContainer id="Pieces">
      <PiecesH1>Memes & Art Pieces</PiecesH1>
      <PiecesWrapper>
        {images.map((img, _id) => (
          <PiecesIcon key={`image-meme-${_id}`} src={img} alt="Meme" />
        ))}
      </PiecesWrapper>
    </PiecesContainer>
  );
};

export default Pieces;
