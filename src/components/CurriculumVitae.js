import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CVPersonalDisplay from "./CVPersonalDisplay";
import CVExperienceDisplay from "./CVExperienceDisplay";
import CVEducationDisplay from "./CVEducationDisplay";

export default class CurriculumVitae extends Component {
  render() {
    const user = this.props.data[0][0] || {};

    return (
      <Container className="w-100 h-100" fluid>
        <Row className="d-flex flex-row justify-content-center pt-3 h-75">
          <Col sm={12} md={2} className="bg-primary text-light p-3">
            <CVPersonalDisplay user={user} />
          </Col>
          <Col sm={12} md={4} className="bg-light p-3">
            <CVEducationDisplay data={this.props.data[1]} />
            <CVExperienceDisplay data={this.props.data[2]} />
          </Col>
        </Row>
      </Container>
    );
  }
}
