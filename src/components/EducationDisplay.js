import React, { Component } from "react";
import { Col, Row, Card, Form } from "react-bootstrap";

export default class Education extends Component {
  render() {
    return (
      <Card>
        <Form>
          <Card.Header as="h5">Education</Card.Header>
          <Card.Body>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="institutionName">
                  <Form.Label>Name of institution</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.institutionName}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="fieldOfStudy">
                  <Form.Label>Field of study</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.fieldOfStudy}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group>
                  <Form.Label>Degree</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.degree}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.startDate}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.graduationDate}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Form>
      </Card>
    );
  }
}
