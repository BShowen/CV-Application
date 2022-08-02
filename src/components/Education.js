import React, { Component } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";

export default class Education extends Component {
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
      this.props.submit({ education: formParams });
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
          <Card.Title>Education</Card.Title>
          <hr />
          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={this.onSubmit}
          >
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="institutionName">
                  <Form.Label>Name of institution</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="text"
                    placeholder="Institution"
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="fieldOfStudy">
                  <Form.Label>Field of study</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    type="text"
                    placeholder="Field of study"
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="degree">
                  <Form.Label>Degree</Form.Label>
                  <Form.Select onChange={this.onChange}>
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
                <Form.Group className="mb-3" controlId="startDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control onChange={this.onChange} type="date" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="graduationDate">
                  <Form.Label>Graduation Date</Form.Label>
                  <Form.Control onChange={this.onChange} type="date" required />
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
