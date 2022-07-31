import React, { Component } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";

export default class ExperienceForm extends Component {
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
      console.log(formParams);
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
          <Card.Title>Experience</Card.Title>
          <hr />
          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={this.onSubmit}
          >
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="companyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="text"
                    placeholder="Company name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="jobTitle">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="text"
                    placeholder="Job Title"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="startDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control onChange={this.onChange} type="date" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="endDate">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control onChange={this.onChange} type="date" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="jobDescription">
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    required
                    as="textarea"
                    rows="5"
                  />
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
