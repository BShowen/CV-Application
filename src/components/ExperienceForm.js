import React, { Component } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";

export default class ExperienceForm extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Experience</Card.Title>
          <hr />
          <Form>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="company-name">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="job-title">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control type="text" placeholder="Job Title" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="start-date">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="end-date">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="job-description">
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control as="textarea" rows="5" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
