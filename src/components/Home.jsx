// src/components/Home.js
import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 80px);
  padding: 0 4rem;
`;

const ContentArea = styled.div`
  flex: 1;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ImageArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${props => props.theme.colors.primary};
`;

const Home = () => {
  return (
    <HomeContainer>
      <ContentArea>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm Ijlal Furqaan
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Software Engineer
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I excel at crafting elegant digital experiences and am proficient in various programming languages and technologies.
        </Description>
      </ContentArea>
      <ImageArea>
        <ProfileImage
          src="/path-to-your-image.jpg"
          alt="Ijlal Furqaan"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
      </ImageArea>
    </HomeContainer>
  );
};

export default Home;