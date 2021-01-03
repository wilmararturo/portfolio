import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import ContactButtons from "../components/ContactButtons";

import MyProjects from "../Projects.json";

function Projects() {
  return (
    <Container>
      <Row>
        <SectionHeader header="Projects" />
      </Row>
      <Row rowID="project-row">
        {MyProjects.map((item, index) => (
          <Card project={item} key={index} />
        ))}
      </Row>
      <Row>
        <ContactButtons />
      </Row>
    </Container>
  );
}

export default Projects;
