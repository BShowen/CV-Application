import React, { Component } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";

export default class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      const { validated, ...formParams } = this.state;
      this.props.submit({ personalInfo: formParams });
    }

    this.setState({
      validated: true,
    });
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value.trim(),
    });
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Personal Information</Card.Title>
          <hr />
          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={this.onSubmit}
          >
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="text"
                    placeholder="First name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="text"
                    required
                    placeholder="Last name"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="phoneNumber">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="tel"
                    required
                    placeholder="(123) 555-5555"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="email"
                    required
                    placeholder="Email"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="danger" type="button" onClick={this.props.cancel}>
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
