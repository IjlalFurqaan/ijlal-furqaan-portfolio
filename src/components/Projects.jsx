// src/components/Projects.js
import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  padding: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const ProjectTech = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const Projects = () => {
  const projects = [
    {
      title: "Movie Review App",
      description: "A platform that allows users to browse, rate, and review movies. Integrated Redux for state management, resulting in a 20% increase in data retrieval speed.",
      tech: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "Bootstrap"]
    },
    {
      title: "E-commerce App",
      description: "A comprehensive e-commerce application featuring product listings, shopping cart functionality, and user authentication. Utilized Vite Js for fast build times, decreasing load times by 30%.",
      tech: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "Material UI", "Vite Js"]
    }
  ];

  return (
    <ProjectsContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTech>
              {project.tech.map(tech => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </ProjectTech>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;