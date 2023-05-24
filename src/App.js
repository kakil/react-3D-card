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

// Styled components
const Card = styled.div`
  max-width: 360px;
  margin: 20px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.1), 0px 30px 60px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px; /* New dark mode background color */
  padding: 20px;
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
  margin-right: 10px;
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

  return (
    <>
      <GlobalStyle />
      <Card>
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
            <AvatarStyled src={avatarImage} />
            <AuthorName>Kitwana Akil</AuthorName>
          </Author>
        </CardContent>
      </Card>
    </>
  );
}

export default App;
