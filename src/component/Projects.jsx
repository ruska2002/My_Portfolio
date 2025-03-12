import { Container, Row, Col, Tab } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import background from "../assets/img/background.png";
import projImg1 from "../assets/img/calculator1.png";
import projImg2 from "../assets/img/calculator2.png";
import projImg3 from "../assets/img/workoutTimer.png";
import projImg4 from "../assets/img/weather.png";
import projImg5 from "../assets/img/fitclub.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

import "../App.css";

export default function Projects() {
  const projects1 = [
    {
      title: "Calculator",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Fit Club",
      description: "Design & Development & Animation",
      imgUrl: projImg5,
    },
    {
      title: "workout Timer",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "Weather",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Calculator",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    In this section, I’ve showcased a selection of my projects
                    that reflect my journey as a web developer. From building
                    dynamic web applications to exploring modern frameworks,
                    each project has been an opportunity to learn, experiment,
                    and grow. These projects demonstrate my proficiency in
                    technologies like React, Tailwind CSS, Next.js, and
                    JavaScript.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={background}></img>
    </section>
  );
}
