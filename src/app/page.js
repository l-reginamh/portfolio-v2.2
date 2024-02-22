import React from 'react';
import Container from './components/Container';
import getExperiences from './utils/getExperiences';
import getProjects from './utils/getProjects';
import getSkills from './utils/getSkills';

export default async function Home() {
  const experiences = await getExperiences();
  const projects = await getProjects();
  const skills = await getSkills();
  return (
    <>
      <Container experiences={experiences} projects={projects} skills={skills} />
    </>
  );
}
