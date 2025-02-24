import React from "react";
import Planet1 from "../../images/planets/planet1.png";
import Planet2 from "../../images/planets/planet2.png";
import Planet3 from "../../images/planets/planet3.png";
import Planet4 from "../../images/planets/planet4.png";
import Planet5 from "../../images/planets/planet5.png";
import Planet6 from "../../images/planets/planet6.png";
import { LayerContainer, Planet, PlanetContainer } from "./LayerElements";

const Planets = () => {
  //   const [images, setImages] = useState([]);
  //   useEffect(() => {
  //     setImages([Icon1, Icon2, Icon3, Icon4, Icon5, Icon6]);
  //   }, []);
  return (
    <LayerContainer id="Layer">
      <PlanetContainer>
        <Planet $top={20} $left={6} src={Planet1} alt="planet" />
        <Planet $top={60} $left={8} src={Planet2} alt="planet" />
        <Planet $top={85} $left={6} src={Planet3} alt="planet" />
        <Planet $top={5} $right={6} src={Planet4} alt="planet" />
        <Planet $top={30} $right={8} src={Planet5} alt="planet" />
        <Planet $top={70} $right={6} src={Planet6} alt="planet" />
      </PlanetContainer>
    </LayerContainer>
  );
};

export default Planets;
