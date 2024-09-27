import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaGit, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiMongodb, SiHtml5, SiCss3, SiRedux, SiExpress } from 'react-icons/si';

const AboutContainer = styled.div`
  padding: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Content = styled(motion.div)`
  display: flex;
  gap: 2rem;
`;

const TextContent = styled.div`
  flex: 1;
`;

const Paragraph = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
`;

const SkillCategory = styled.div`
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & svg {
    margin-right: 10px;
  }
`;

const About = () => {
  const skills = {
    'Languages': [
      { name: 'Python', icon: <FaPython /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ],
    'Web Development': [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
    ],
    'Databases': [
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    'Tools': [
      { name: 'Git', icon: <FaGit /> },
      { name: 'GitHub', icon: <FaGit /> }, // GitHub uses the same Git icon
      { name: 'VS Code', icon: <FaReact /> }, // Replace with appropriate icon if available
      { name: 'IntelliJ IDEA', icon: <FaReact /> }, // Replace with appropriate icon if available
    ],
  };

  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </Title>
      <Content>
        <TextContent>
          <Paragraph
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a passionate software engineer with a strong foundation in computer science and a keen interest in creating efficient, scalable solutions. My journey in tech began during my Bachelor's in Computer Science and Engineering at Osmania University, where I honed my problem-solving skills and developed a love for coding.
          </Paragraph>
          <Paragraph
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Currently pursuing my Master's in Computer Science at The Philipp Universität Marburg, I'm expanding my knowledge and exploring cutting-edge technologies. My professional experience as an Associate Software Engineer at Mphasis has given me practical insights into building robust web applications and working in collaborative environments.
          </Paragraph>
        </TextContent>
        <SkillsContainer>
          {Object.entries(skills).map(([category, skillList], index) => (
            <SkillCategory key={category}>
              <SkillTitle>{category}</SkillTitle>
              <SkillList>
                {skillList.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 + skillIndex * 0.05 }}
                  >
                    {skill.icon} {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </Content>
    </AboutContainer>
  );
};

export default About;
