import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

export default class App extends Component {
  constructor() {
    super();

    this.onValidSubmit = this.onValidSubmit.bind(this);

    this.state = {
      forms: [
        <PersonalForm onValidSubmit={this.onValidSubmit} />,
        <EducationForm onValidSubmit={this.onValidSubmit} />,
        <ExperienceForm onValidSubmit={this.onValidSubmit} />,
      ],
      progress: 0,
    };
  }

  onValidSubmit(formParams) {
    this.setState(
      {
        ...formParams,
        progress: this.state.progress + 1,
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="p-0" sm={12} md={2} lg={3} xl={3}>
            A
          </Col>
          <Col className="p-0" sm={12} md={8} lg={6} xl={5}>
            {this.state.forms[this.state.progress]}
          </Col>
          <Col className="p-0" sm={12} md={2} lg={3} xl={3}>
            C
          </Col>
        </Row>
      </Container>
    );
  }
}
