import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";

export default class Experience extends Component {
  render() {
    return (
      <Card>
        <Card.Header>Experience</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={12} md={6}>
              <Card.Text>{this.props.data.companyName}</Card.Text>
            </Col>
            <Col sm={12} md={6}>
              <Card.Text>{this.props.data.jobTitle}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>{this.props.data.startDate}</Card.Text>
            </Col>
            <Col>
              <Card.Text>{this.props.data.endDate}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>{this.props.data.jobDescription}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
