import React from "react";
import Layout from "../../layout/Layout";
import Hero from "../../components/Hero/Hero";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import About from "../About/About";

function Home() {
  return (
    <>
      <Hero />
      <ProjectCard />
      <About />
    </>
  );
}

export default Home;
