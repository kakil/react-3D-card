import "./styles.css";
import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import coverImage from "./card-image.png";
import avatarImage from "./kit-avatar.png";
import backgroundImage from "./card-background.jpg";
import { createGlobalStyle } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useRef } from "react";

// Styled components
// Styled components
const Card = styled.div`
  position: relative;
  max-width: 360px;
  margin: 20px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.1), 0px 30px 60px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.1s ease-out;
  transform: ${(props) =>
    `perspective(600px) rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg) scale(${props.scale})`};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ gradientAngle }) =>
      `linear-gradient(${gradientAngle}deg, rgba(255,255,255, 0.1) 0%, rgba(255,255,255, 0.7) 50%, rgba(0, 0, 0, 0.5) 100%)`};
    border-radius: 10px;
    padding: 1px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 10px;
`;

const CardContent = styled.div`
  padding-top: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 590;
  font-size: 17px;
  line-height: 20px;

  color: #ffffff;
`;

const Subtitle = styled.h2`
  font-style: normal;
  font-weight: 510;
  font-size: 15px;
  line-height: 18px;
  color: grey;
  padding: 0 16px;
`;

const Text = styled.p`
  font-size: 14px;
  padding-top: 20px;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const AvatarStyled = styled(Avatar)`
  position: relative;
  margin-right: 10px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ gradientAngle }) =>
      `linear-gradient(${gradientAngle}deg, rgba(255,255,255, 0.1) 0%, rgba(255,255,255, 0.7) 50%, rgba(0, 0, 0, 0.5) 100%)`};
    border-radius: 50%;
    padding: 1px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const AuthorName = styled.p`
  font-size: 14px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: #f8f9fa; 
    background-color: #343a40;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const useStyles = makeStyles((theme) => ({
  divider: {
    border: "none",
    height: "1px",
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
    borderRadius: "10px",
    margin: "12px 0"
  }
}));

function App() {
  const classes = useStyles();

  // Declare rotation states
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  // Declare scale state
  const [scale, setScale] = useState(1);
  const cardRef = useRef();

  // Declare gradient angle state
  const [gradientAngle, setGradientAngle] = useState(0);

  const handleMouseMove = (event) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2; //x position within the element.
    const y = event.clientY - rect.top - rect.height / 2; //y position within the element.
    const height = rect.height;
    const width = rect.width;

    const rotateX = (y / height) * 20 - 10;
    const rotateY = (x / width) * 20 - 10;

    setRotateX(-rotateX);
    setRotateY(rotateY);
  };

  const handleMouseEnter = () => setScale(1.05); // Enlarge the card
  const handleMouseLeave = () => {
    setScale(1); // Reset the scale and rotation
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      <GlobalStyle />
      <Card
        ref={cardRef}
        rotateX={rotateX}
        rotateY={rotateY}
        scale={scale}
        gradientAngle={gradientAngle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <CoverImage src={coverImage} alt="Cover" />
        <CardContent>
          <Title>Build beautiful apps with GPT4 and MidJourney</Title>
          <Divider className={classes.divider} />
          <Subtitle>40 sections - 5 hours</Subtitle>
          <Text>
            Hands-on course teaching about all the techniques for turning a
            MidJourney inspiration into a real working design with interactions
            in Figma.
          </Text>
          <Divider />
          <Author>
            <AvatarStyled src={avatarImage} gradientAngle={gradientAngle} />
            <AuthorName>Kitwana Akil</AuthorName>
          </Author>
        </CardContent>
      </Card>
    </>
  );
}

export default App;
