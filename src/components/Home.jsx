import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Styled components remain the same
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  background: linear-gradient(120deg, #f7f7f7 40%, #e3f2fd 100%);
`;

const TextArea = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  color: #00ff99;
  margin-bottom: 10px;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.5;
  margin: 20px 0;
`;

// const ImageArea = styled.div`
//   margin-top: 40px;
// `;

// const ProfileImage = styled(motion.img)`
//   border-radius: 50%;
//   border: 4px solid #00ff99;
//   width: 200px;
//   height: 200px;
//   object-fit: cover;
// `;

const HighlightText = styled.span`
  color: #00ff99;
  font-weight: bold;
`;

const Button = styled(motion(Link))`
  // Change from motion.a to motion(Link)
  display: inline-block;
  padding: 12px 24px;
  margin-top: 30px;
  background-color: #00ff99;
  color: #fff;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
`;

const SocialIcons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled(motion.a)`
  color: #555;
  font-size: 2rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <TextArea>
        <Title
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello, I'm Ijlal Furqaan
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Fullstack Developer
        </Subtitle>

        <Description
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I excel at crafting elegant digital experiences and am proficient in
          various programming languages and technologies. With experience in
          both front-end and back-end development, I specialize in building
          robust, scalable web applications.
        </Description>

        <Description
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          I am skilled in <HighlightText>React.js</HighlightText>,{" "}
          <HighlightText>Node.js</HighlightText>,{" "}
          <HighlightText>MongoDB</HighlightText>,{" "}
          <HighlightText>Express.js</HighlightText>{" "}
          <HighlightText>JavaScript</HighlightText>, and{" "}
          <HighlightText>REST APIs</HighlightText>, and I have a passion for
          creating clean, intuitive, and user-friendly interfaces.
        </Description>

        <Button
          to="/contact" // Change href to 'to' and point to the contact route
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Get in Touch
        </Button>

        <SocialIcons>
          <IconLink
            href="https://github.com/IjlalFurqaan"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#000" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <FaGithub />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/ijlal-furqaan-32b7251b6/"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#0077b5" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <FaLinkedin />
          </IconLink>
          <IconLink
            href="https://twitter.com/yourusername"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#1da1f2" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <FaTwitter />
          </IconLink>
        </SocialIcons>
      </TextArea>

      {/* <ImageArea>
        <ProfileImage
          src="/20210613034946_IMG_4168.jpg"
          alt="Ijlal Furqan"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
      </ImageArea> */}
    </HomeContainer>
  );
};

export default Home;
