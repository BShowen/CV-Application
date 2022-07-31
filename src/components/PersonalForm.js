import React, { Component } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";

export default class PersonalForm extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Personal Information</Card.Title>
          <hr />
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="first-name">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" placeholder="First name" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="last-name">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" required placeholder="Last name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="phone-number">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="tel"
                    required
                    placeholder="(123) 555-5555"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required placeholder="Email" />
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
