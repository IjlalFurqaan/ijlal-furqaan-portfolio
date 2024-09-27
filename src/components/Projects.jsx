import React from 'react';
import styled from '@emotion/styled';

const ProjectsSection = styled.section`
  background-color: #f7f7f7;
  padding: 60px 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 3rem;
  margin-bottom: 40px;
`;

const ProjectGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProjectCard = styled.a` // Updated to an anchor tag
  background-color: #2b2b2b;
  color: #f7f7f7;
  border-radius: 15px;
  padding: 30px;
  margin: 20px;
  max-width: 450px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectTitle = styled.h3`
  color: #00ff99;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #bbb;
  margin-bottom: 20px;
  font-size: 1rem;
`;

const TechTags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background-color: #00ff99;
  color: #000;
  border-radius: 15px;
  padding: 8px 15px;
  margin: 5px;
  font-size: 0.9rem;
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        {/* Movie Review App Card */}
        <ProjectCard href="https://github.com/IjlalFurqaan/movie-review" target="_blank">
          <ProjectTitle>Movie Review App</ProjectTitle>
          <ProjectDescription>
            A platform that allows users to browse, rate, and review movies.
          </ProjectDescription>
          <TechTags>
            <TechTag>HTML5</TechTag>
            <TechTag>CSS3</TechTag>
            <TechTag>JavaScript</TechTag>
            <TechTag>React</TechTag>
            <TechTag>Redux</TechTag>
          </TechTags>
        </ProjectCard>

        {/* E-commerce App Card */}
        <ProjectCard href="https://github.com/IjlalFurqaan/e-com-app" target="_blank">
          <ProjectTitle>E-commerce App</ProjectTitle>
          <ProjectDescription>
            A comprehensive e-commerce application featuring product listings and shopping cart functionality.
          </ProjectDescription>
          <TechTags>
            <TechTag>HTML5</TechTag>
            <TechTag>CSS3</TechTag>
            <TechTag>JavaScript</TechTag>
            <TechTag>React</TechTag>
            <TechTag>Redux</TechTag>
            <TechTag>Material UI</TechTag>
          </TechTags>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
