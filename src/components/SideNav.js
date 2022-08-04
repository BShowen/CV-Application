import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class SideNav extends Component {
  render() {
    return (
      <Container className="p-0" fluid>
        <Container
          as="p"
          className={this.props.progress === 0 && "text-primary"}
        >
          Personal Information
        </Container>
        <Container
          as="p"
          className={this.props.progress === 1 && "text-primary"}
        >
          Education Information
        </Container>
        <Container
          as="p"
          className={this.props.progress === 2 && "text-primary"}
        >
          Experience
        </Container>
      </Container>
    );
  }
}
