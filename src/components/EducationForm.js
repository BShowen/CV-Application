import React, { Component } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";

export default class EducationForm extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Education</Card.Title>
          <hr />
          <Form>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="institution-name">
                  <Form.Label>Name of institution</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Institution"
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="field-of-study">
                  <Form.Label>Field of study</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Field of study"
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="degree">
                  <Form.Label>Degree</Form.Label>
                  <Form.Select>
                    <option>A.A.</option>
                    <option>A.S.</option>
                    <option>B.A.</option>
                    <option>B.S.</option>
                    <option>M.A.</option>
                    <option>M.S.</option>
                    <option>Ph.D.</option>
                    <option>High School Diploma</option>
                    <option>Other</option>
                  </Form.Select>
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
                  <Form.Label>Graduation Date</Form.Label>
                  <Form.Control type="date" required />
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
