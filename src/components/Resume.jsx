// src/components/Resume.js
import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ResumeContainer = styled.div`
  padding: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const Section = styled(motion.div)`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const Entry = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const EntryTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const EntrySubtitle = styled.h5`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const EntryDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const DownloadButton = styled(motion.a)`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 2rem;
`;

const Resume = () => {
  return (
    <ResumeContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Resume
      </Title>

      <Section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionTitle>Education</SectionTitle>
        <Entry>
          <EntryTitle>Master's in Computer Science</EntryTitle>
          <EntrySubtitle>The Philipp Universität Marburg, Germany | April 2024 – April 2026</EntrySubtitle>
        </Entry>
        <Entry>
          <EntryTitle>Bachelor of Engineering in Computer Science and Engineering</EntryTitle>
          <EntrySubtitle>University College of Engineering, Osmania University, India | July 2017 – August 2021</EntrySubtitle>
          <EntryDescription>CGPA: 8.0/10</EntryDescription>
        </Entry>
      </Section>

      <Section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SectionTitle>Work Experience</SectionTitle>
        <Entry>
          <EntryTitle>Associate Software Engineer</EntryTitle>
          <EntrySubtitle>Mphasis, Pune, India | September 2021 – January 2024</EntrySubtitle>
          <EntryDescription>
            • Developed a React-based benefits enrollment platform with complex UI components and RESTful API integrations, increasing user engagement by 30%.
            • Built a responsive React/Redux consumer portal with optimized multi-step flows and efficient HTTP request handling, reducing user drop-off by 25%.
            • Created a React/Node.js management system with custom hooks and reusable components for internal evaluations, improving evaluation efficiency by 30%.
            • Optimized state management across projects using Redux and React Context API, achieving 35% faster rendering and 20% improved code maintainability.
          </EntryDescription>
        </Entry>
      </Section>

      <DownloadButton
        href="/path-to-your-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Full Resume
      </DownloadButton>
    </ResumeContainer>
  );
};

export default Resume;