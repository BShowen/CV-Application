import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

export default class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="p-0" sm={12} md={2} lg={3} xl={3}>
            A
          </Col>
          <Col className="p-0" sm={12} md={8} lg={6} xl={5}>
            <PersonalForm />
            <EducationForm />
            <ExperienceForm />
          </Col>
          <Col className="p-0" sm={12} md={2} lg={3} xl={3}>
            C
          </Col>
        </Row>
      </Container>
    );
  }
}
