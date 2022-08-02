import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";

export default class Personal extends Component {
  render() {
    return (
      <Card>
        <Card.Header>Personal Info.</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Card.Text>{this.props.data.firstName}</Card.Text>
            </Col>
            <Col>
              <Card.Text>{this.props.data.lastName}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>{this.props.data.phoneNumber}</Card.Text>
            </Col>
            <Col>
              <Card.Text>{this.props.data.email}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
